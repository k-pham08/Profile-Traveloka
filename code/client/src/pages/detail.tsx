import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "@mui/material";
import UserInfo from "../components/userInfo";
import UserReward from "../components/userReward";
import UserOrderHistory from "../components/userOrderHistory";

export default function Detail() {
	return (
		<Grid container spacing={2} mt={2}>
			<Grid item xs></Grid>
			<Grid item xs={3}>
				<Paper sx={{ width: 320 }}>
					<MenuList dense>
						<MenuItem>
							<Link
								href="/detail"
								underline="none"
								color="black"
							>
								<ListItemText>
									Personal Infomation
								</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link
								href="/detail/reward"
								underline="none"
								color="black"
							>
								<ListItemText>Reward</ListItemText>
							</Link>
						</MenuItem>
						<Divider />
						<MenuItem>
							<Link
								href="/detail/order-history"
								underline="none"
								color="black"
							>
								<ListItemText>
									Order History
								</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link
								href="/detail/orders"
								underline="none"
								color="black"
							>
								<ListItemText>List Ordrer</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link
								href="/detail/voucher"
								underline="none"
								color="black"
							>
								<ListItemText>Voucher</ListItemText>
							</Link>
						</MenuItem>
						<Divider />
						<MenuItem>
							<Link
								href="/detail/notification"
								underline="none"
								color="black"
							>
								<ListItemText>
									Notification
								</ListItemText>
							</Link>
						</MenuItem>
					</MenuList>
				</Paper>
			</Grid>
			<Grid item xs={7}>
				<UserInfo />
				<UserReward />
				<UserOrderHistory />
			</Grid>
			<Grid item xs></Grid>
		</Grid>
	);
}
