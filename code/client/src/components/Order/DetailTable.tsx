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
import { rejects } from "assert";

export const DetailTable: FC = observer(() => {
    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams()
    const {sOrderDetail} = useStore();

    // useEffect(() => {
    //     if(id){
    //         Order.getById(id).then(([err, data]) => {
    //             if(err){
    //                 enqueueSnackbar(err.message, {variant: "error"});
    //             }
    //             sOrderDetail.set_order(data);
    //         })
    //     }
    // }, [id]); 

    const columns: Column<OrderDetail>[] = [
        {title: "Product name", field: "productName"},
        {title: "Quantity", field: "quantity", type: "numeric"},
        {title: "Price", field: "price", type: "numeric"},
        {title: "Thumbnail", field: "thumbnail"},
    ];

    return <MaterialTable 
    style={generalStyles.paddingTable}
    title="Order Detail Manager"
    columns={columns}
    data={sOrderDetail.order.orderDetails}
    localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this Order?'}}}}
    editable={{
        onRowUpdate: (newData) => {
            return OrderDetail.update(newData).then(([err, data]) => {
                enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                if(!err){
                    sOrderDetail.order.orderDetails.map((o) => o.detailId === newData.detailId ? newData : o);
                }
            })
        },
        onRowDelete: oldData => {
            return OrderDetail.delete(oldData.detailId).then(([err, data]) => {
                enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                if(!err){
                    sOrderDetail.order.orderDetails.filter((o) => o.detailId !== oldData.detailId)
                }
            })
        }
    }}
    actions={[
        {
            icon: "visibility",
                tooltip: "Go To Product",
                onClick: (rowData) => {
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