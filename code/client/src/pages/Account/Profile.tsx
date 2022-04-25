import { FC } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "@mui/material";

import UserInfo from "../../components/user/UserInfo";
import UserReward from "../../user/components/UserReward";
import UserOrderHistory from "../../components/userOrderHistory";
import { BasicLayout } from "../../layouts/BasicLayout";

export const Profile: FC = () => {
	return (
		<BasicLayout>
			<Grid container spacing={2} direction="row">
				<Grid item md={3}>
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
				</Grid>
				<Grid item md>
					<UserInfo />
					<UserReward />
					<UserOrderHistory />
				</Grid>
			</Grid>
		</BasicLayout>
	);
};
