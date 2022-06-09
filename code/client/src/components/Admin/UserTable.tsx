import { FC, useEffect, useState} from "react";
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
import { UserRole } from "../../models/types";

export const UserTable: FC<{ list: User[], reloadList: Function, setList: Function }> = observer(({
                                                                                                      list,
                                                                                                      reloadList,
                                                                                                      setList
                                                                                                  }) => {
    const {sAccount, sSignIn, types} = useStore();
    const navigator = useNavigate();
    const [typesLookUp, setTypesLookUp] = useState<any>([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        setTypesLookUp(types.reduce((r, i) => {
            r[i] = i;
            return r;
        }, Object.assign({})));
    }, [types]);

    // useEffect(() => {
    //     setData(list);
    // }, [list]);

    const columns: Column<User>[] = [
        {title: 'Name', field: 'name'},
        {title: "Type", field: "type", lookup: typesLookUp},
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
        data={sAccount.users}
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
                        if (!err) {
                            sAccount.set_users(list.map((e) => e.userId === newData.userId ? newData : e));
                        }
                        resolve({});

                    })
                })
            },
            onRowDelete: oldData => {
                return User.delete(oldData.userId).then(([err, data]) => {
                    enqueueSnackbar((err ? err : data).message, {variant: err ? "error" : "success"});
                    if (!err) {
                        sAccount.set_users(list.filter((u) => u.userId !== oldData.userId));
                    }
                });
            },
        }}
        actions={[
            (rowData) => {
                return {
                    icon: "offline_share",
                    tooltip: rowData.type === UserRole.ADMIN ? "Admin Should Not Connect Voucher Servive" : "Go To Voucher Service",
                    disabled: rowData.type === UserRole.ADMIN,
                    onClick: (event, rowData) => {
                        rowData = rowData as User;
                        const {REACT_APP_VOUCHER_HOST} = process.env;
                        window.location.href = `${REACT_APP_VOUCHER_HOST}${rowData.type === UserRole.PARTNER ? "/partner/auth" : "/user/home"}?appId=vy03&token=${rowData.access_token}`;
                    }
                }
            },
            {
                icon: "visibility",
                tooltip: "Go To Account",
                onClick: (event, rowData) => {
                    rowData = rowData as User;
                    sSignIn.LoginWithAdmin(rowData.userId || "").then((err) => {
                        if (err) {
                            enqueueSnackbar(err.message, {variant: "error"});
                        }
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