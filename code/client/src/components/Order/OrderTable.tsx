import MaterialTable, {Column} from "material-table";
import {observer} from "mobx-react";
import {FC, useEffect} from "react";
import {generalStyles} from "../../utils/theme";
import {store, useStore} from "../../stores";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {Order} from "../../models/Order";
import moment from "moment";
import {DateTimePicker, DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {TextField, Typography} from "@mui/material";
import {UserRole} from "../../models/types";

export const OrderTable: FC = observer(() => {
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const {sOrder} = useStore();

    useEffect(() => {
        Order.getOfMe().then(([err, data]) => {
            if (err) {
                enqueueSnackbar(err.message, {variant: "error"});
                return;
            }
            sOrder.set_orders(data);
        })
    }, []);

    const makeTitleContent = ({user, service, partner}: Order) => {
        return <Typography>
            <Typography sx={{fontWeight: "bolder"}}>"{user.name}"</Typography>
            <Typography>Đã Đặt Dịch Vụ</Typography>
            <Typography sx={{fontWeight: "bolder"}}>"{service.serviceName}"</Typography>
            <Typography>của</Typography>
            <Typography sx={{fontWeight: "bolder"}}>"{partner.companyName}"</Typography>
        </Typography>
    }

    const columns: Column<Order>[] = [
        {
            title: "order", render: (data) => {
                return makeTitleContent(data);
            }
        },
        {
            title: "Created At", field: "createdAt", type: "date", render: (data) => {
                return moment(data.createdAt).format("HH:mm DD-MM-yyyy")
            }, defaultSort: "desc"
        },
        {title: "Total", field: "total", type: "numeric"},
        {title: "Reward", field: "reward", type: "numeric"},
        {title: "Voucher Code", field: "voucherCode"}
    ];

    return <MaterialTable
        style={generalStyles.paddingTable}
        title="Orders Manager"
        columns={columns}
        data={sOrder.orders}
    />
})