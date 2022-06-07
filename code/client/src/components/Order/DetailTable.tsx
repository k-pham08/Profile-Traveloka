import MaterialTable, { Column } from "material-table";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import {generalStyles} from "../../utils/theme";
import {store, useStore} from "../../stores";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {OrderDetail} from "../../models/OrderDetail";
import {useParams} from "react-router";
import {Order} from "../../models/Order";

export const DetailTable: FC = observer(() => {
    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams()
    const navigator = useNavigate();
    const {sOrderDetail} = useStore();

    useEffect(() => {
        if(id){
            Order.getById(id).then(([err, data]) => {
                if(err){
                    enqueueSnackbar(err.message, {variant: "error"});
                }
                sOrderDetail.set_order(data);
            })
        }
    }, [enqueueSnackbar, id, sOrderDetail]); 

    const columns: Column<OrderDetail>[] = [
        {title: "Product name", field: "productName"},
        {title: "Quantity", field: "quantity"},
        {title: "Price", field: "price"},
        {title: "Thumbnail", field: "thumbnail"},
    ];

    return <MaterialTable 
    style={generalStyles.paddingTable}
    title="Orders Manager"
    columns={columns}
    data={sOrderDetail.order.orderDetails}
    localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this Order?'}}}}
    actions={[
        {
            icon: "visibility",
                tooltip: "Go To Product",
                onClick: (event, rowData) => {
                    rowData = rowData as OrderDetail;
                    window.location.href = `${rowData.link}`
                }
        }
    ]}
    options={{
        actionsColumnIndex: -1,
        pageSize: store.sOrder.orders.length,
        paging: false,
    }}
    />
})