import { observer } from "mobx-react";
import { FC, Fragment, useEffect } from "react";
import { useStore} from "../stores";
import {useSnackbar} from "notistack";
import { Order } from "../models/Order";
import { Paper, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import moment from "moment";
import { useParams } from "react-router";


export const OrderResult: FC = observer(() => {
    const {enqueueSnackbar} = useSnackbar();
    const {sOrder} = useStore();
	const {account} = useParams();

    useEffect(() => {
        if(account){
			Order.getByAccount(account).then(([err, data]) => {
				if(err) {
					enqueueSnackbar(err.message, {variant: "error"});    
					return;
				}
				sOrder.set_orders(data);
			})
		} else {
			Order.getAll().then(([err, data]) => {
				if(err) {
					enqueueSnackbar(err.message, {variant: "error"});    
					return;
				}
				sOrder.set_orders(data);
			})
		}
    }, []);   

    return (
		<Paper style={{width: "100%"}}>
			{sOrder.orders.map((o) => (
				<Paper style={{padding: "1rem"}}>
					<List>
						<ListItem disablePadding>
							<ListItemText 
								primary={"Đặt lúc: " + moment(o.createdAt).format("DD-MM-yyyy")} 
								secondary={
									<Fragment>
									<Typography
										sx={{ display: 'inline' }}
										color="text.primary"
									>
										Công ty: {o.partner.companyName}
									</Typography>
									</Fragment>
								} />
							<ListItemText primary={"Tổng số tiền: " + o.total} style={{textAlign: "end"}}/>
						</ListItem>
					</List>
					<List>
						<Divider/>
						{o.orderDetails.map((d) => (
							<ListItem disablePadding>
								<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText 
									primary={d.productName}
									secondary={
										<Fragment>
										  <Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										  >
											Số lượng:
										  </Typography>
										  {" " + d.quantity}
										</Fragment>
									  } />
								<ListItemText primary={d.price + "đ"} style={{textAlign: "end", color: "red"}}/>
								</ListItemButton>
							</ListItem>
						))}
						<Divider/>
					</List>
				</Paper>
				
			))}
		</Paper>
	)
})