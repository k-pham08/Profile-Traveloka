import MaterialTable, { Column } from "material-table";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import {generalStyles} from "../../utils/theme";
import {store, useStore} from "../../stores";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import { Order } from "../../models/Order";
import moment from "moment";
import { DateTimePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

export const OrderTable: FC = observer(() => {
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const {sOrder} = useStore();

    useEffect(() => {
        Order.getAll().then(([err, data]) => {
            if(err) {
                enqueueSnackbar(err.message, {variant: "error"});    
                return;
            }
            sOrder.set_orders(data);
        })
    }, []);   

    const columns: Column<Order>[] = [
        {title: "Created At", field: "createdAt" , type: "date", render: (data) => {
            return moment(data.createdAt).format("HH:mm DD-MM-yyyy")
        }, defaultSort: "desc", editComponent: (props) => {
            return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Created At"
                    inputFormat="HH:mm dd-MM-yyyy"
                    value={props.value}
                    onChange={(newValue: unknown) => {
                        if (newValue instanceof Date) {
                            props.onChange(newValue);
                        }
                    }}
                />
            </LocalizationProvider>)
        }},
        {title: "Total", field: "total", type: "numeric"},
        {title: "Reward", field: "reward", type: "numeric"},
        {title: "Voucher Code", field: "voucherCode"}
    ];

    return <MaterialTable 
    style={generalStyles.paddingTable}
    title="Orders Manager"
    columns={columns}
    data={sOrder.orders}
    localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this Order?'}}}}
    editable={{
        onRowUpdate: (newData) => {
            return Order.update(newData).then(([err, data]) => {
                enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                if(!err){
                    sOrder.orders.map((o) => o.orderId === newData.orderId ? newData : o);
                }
            })
        },
        onRowDelete: (oldData) => {
            return Order.delete(oldData.orderId).then(([err, data]) => {
                console.log(oldData.orderId)
                enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                if(!err){
                    sOrder.orders.filter((o) => o.orderId !== oldData.orderId)
                }
            })
        }
    }}
    actions={[
        {
            icon: "info", tooltip: "Detail Order", onClick: (event, rowData) => {
                rowData = rowData as Order;
                navigator(`/orders/` + rowData.orderId);
            }
        }
    ]}
    options={{
        actionsColumnIndex: -1,
        pageSize: sOrder.orders.length,
        paging: false,
    }}
    />
})