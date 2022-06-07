import MaterialTable, { Column } from "material-table";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import {generalStyles} from "../../utils/theme";
import {store, useStore} from "../../stores";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import { Order } from "../../models/Order";
import moment from "moment";

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
        }, defaultSort: "desc"},
        {title: "Total", field: "total"},
        {title: "Reward", field: "reward"},
        {title: "Voucher Code", field: "voucherCode"}
    ];

    return <MaterialTable 
    style={generalStyles.paddingTable}
    title="Orders Manager"
    columns={columns}
    data={sOrder.orders}
    localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this Order?'}}}}
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