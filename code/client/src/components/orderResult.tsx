import {observer} from "mobx-react";
import {FC, Fragment, useEffect} from "react";
import {Order} from "../models/Order";
import {
    Divider,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import {UserRole} from "../models/types";
import {Grid} from "@mui/material/";
import moment from "moment";
import { useParams } from "react-router";


export const OrderResult: FC<{ displayType: UserRole | string, orders: Order[] }> = observer(({displayType,orders}) => {

    const makeTitleContent = ({user, service, partner}: Order) => {
        return `${displayType == UserRole.USER ? "Bạn" : user.name} Đã Đặt Dịch Vụ "${service.serviceName}" ${displayType == UserRole.USER ? "của " + partner.companyName : ""}`

    }

    return (
        <Grid container marginX={3}>
            {orders.map((o) => (
                <Paper elevation={3} style={{width: "100%", padding: "1rem", margin: "0.4rem 0"}}>
                    <Grid item>
                        <List>
                            <Typography fontWeight={"bolder"}>{makeTitleContent(o)}</Typography>
                            <Typography >{moment(o.createdAt).format("HH:mm DD/MM/yyyy")}</Typography>
                        </List>
                        <List>
                            <Divider/>
                            {o.details.map((d) => (
                                <ListItem disablePadding>
                                    <Link href={d.link ? d.link : "/"} sx={{width: "100%", textDecoration: "none"}}>
                                        <ListItemButton>
                                            <ListItemIcon sx={{marginX: 1}}>
                                                {d.thumbnail ? <img src={d.thumbnail} width={64} height={64}/> :
                                                    <InboxIcon/>}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={d.productName}
                                                secondary={
                                                    <Fragment>
                                                        <Typography
                                                            sx={{display: 'inline', color: "#888"}}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Số lượng:
                                                        </Typography>
                                                        {" " + d.quantity}
                                                    </Fragment>
                                                }/>
                                            <ListItemText primary={d.price.toLocaleString() + " VND"}
                                                          style={{textAlign: "end", color: "#888"}}/>
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                            <Divider/>
                        </List>
                        <Grid container justifyContent={"space-between"}>
                            <Typography variant={"h4"}>
                                <Typography sx={{fontWeight: "bolder"}}>Tổng Tiền: </Typography>
                                {o.total.toLocaleString() + " VND"}
                            </Typography>
                            <Typography>
                                {displayType == UserRole.USER && <Typography variant={"h6"} style={{color:"#5aaa14"}}>+ {o.reward} điểm</Typography>}
                                <Typography></Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Grid>
    )
})

// 	<ListItemText
// primary={"Đặt lúc: " + moment(o.createdAt).format("DD-MM-yyyy")}
// secondary={
// <Fragment>
// 	<Typography
// 		sx={{ display: 'inline' }}
// 		color="text.primary"
// 	>
// 		Công ty: {o.partner.companyName}
// 	</Typography>
// </Fragment>
// } />
// <ListItemText primary={"Tổng số tiền: " + o.total} style={{textAlign: "end"}}/>
