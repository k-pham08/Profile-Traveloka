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

export const UserTable: FC<{ list: User[], setList: Dispatch<SetStateAction<User[]>> }> = ({list, setList}) => {
    const navigator = useNavigate();
    const [date, setDate] = useState<Date>(new Date());
    const [types, setTypes] = useState<any>([]);
    const {enqueueSnackbar} = useSnackbar();


    const handleDateChange = (newValue: unknown) => {
        if (newValue instanceof Date) {
            setDate(newValue)
            return newValue;
        }
    };

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

    const columns: Column<User>[] = [
        {title: 'Name', field: 'name'},
        {title: "Type", field: "type", lookup: types},
        {title: "Username", field: "username"},
        {
            title: 'Birthday', field: 'dob', type: "datetime", render: (row) => {
                return <>{formatDDMMYYYY(row.dob)}</>
            }
            , editComponent: props => (<LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Birthday"
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    renderInput={(params: any) => {
                        return (
                            <TextField name="bod" {...params} />
                        )
                    }}
                    onChange={handleDateChange}/>
            </LocalizationProvider>)
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
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    User.updateUser(newData).then(() => {
                        resolve({});
                    })
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    resolve({})
                }),
        }}
        actions={[
            {
                icon: 'info',
                tooltip: 'Info',
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
}