import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {User} from "../../models/User";
import MaterialTable, {Column} from "material-table";
import {formatDDMMYYYY} from "../../utils/date";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {useStore} from "../../stores";

export const UserTable: FC<{ list: User[], reloadList: Function }> = observer(({list, reloadList}) => {
    const {sSignIn} = useStore();
    const navigator = useNavigate();
    const [types, setTypes] = useState<any>([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        User.getTypes().then(([err, data]) => {
            if (err) {
                enqueueSnackbar(err.message, {variant: "error"});
                return;
            }

            setTypes(data.reduce((r, i) => {
                r[i] = i;
                return r;
            }, Object.assign({})));
        })
    }, [])
    useEffect(() => {
    }, [list])

    const columns: Column<User>[] = [
        {title: 'Name', field: 'name'},
        {title: "Type", field: "type", lookup: types},
        {title: "Username", field: "username"},
        {
            title: 'Birthday', field: 'dob', type: "datetime", render: (row) => {
                return <>{formatDDMMYYYY(row.dob)}</>
            },
            width: "10rem",
            editComponent: (props) => {
                return (<LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Birthday"
                        inputFormat="dd/MM/yyyy"
                        value={props.value}
                        renderInput={(params: any) => {
                            return (
                                <TextField name="bod" {...params} />
                            )
                        }}
                        onChange={(newValue: unknown) => {
                            if (newValue instanceof Date) {
                                props.onChange(newValue);
                            }
                        }}/>
                </LocalizationProvider>)
            }
        },
        {
            title: 'Email',
            field: 'email',
        }, {title: "Phone", field: "phone"}
    ];

    return <MaterialTable
        style={{padding: "0rem 1rem"}}
        title="Accounts Manager"
        columns={columns}
        data={list}
        localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this User?'}}}}
        editable={{
            onRowUpdate: (newData, oldData) => {
                return new Promise((resolve, reject) => {
                    const {userId, ...user} = newData;
                    if (!user.name || !user.username || !user.email || !user.phone) {
                        enqueueSnackbar("Please Enter Info Before Update It!", {variant: "error"});
                        return resolve({});
                    }
                    User.update(userId, user).then(([err, data]) => {
                        enqueueSnackbar((err ? err : data).message, {variant: err ? "error" : "success"});

                        resolve({});
                        if (!err) {
                            reloadList()
                        }
                    })
                });
            },
            onRowDelete: oldData => {
                return User.delete(oldData.userId).then(([err, data]) => {
                    enqueueSnackbar((err ? err : data).message, {variant: err ? "error" : "success"});
                    if(!err){
                        reloadList();
                    }
                });
            },
        }}
        actions={[
            {
                icon: "visibility",
                tooltip: "Go To Account",
                onClick: (event, rowData) => {
                    rowData = rowData as User;
                    sSignIn.LoginWithAdmin(rowData.userId || "").then((err) => {
                        console.log(err)
                    });
                }
            },
            {
                icon: 'info',
                tooltip: 'Info & Edit',
                onClick: (event, rowData) => {
                    rowData = rowData as User;
                    navigator(`/accounts/${rowData.userId}/view`);
                }
            }
        ]}
        options={{
            actionsColumnIndex: -1
        }}
    />
})