import { FC } from "react";
import {
	Grid,
	Divider,
	MenuList,
	MenuItem,
	ListItemText,
} from "@mui/material/";

import { Link } from "react-router-dom";

import { UserInfo, UserReward } from "../../components/user/";
import { UserOrderHistory } from "../../components/userOrderHistory";
import { BasicLayout } from "../../layouts/BasicLayout";

export const Profile: FC = () => {
	return (
		<BasicLayout>
			<Grid container spacing={2} direction="row">
				<Grid item md={3}>
					<MenuList dense>
						<MenuItem>
							<Link to="/detail" color="black">
								<ListItemText>
									Personal Infomation
								</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/detail/reward" color="black">
								<ListItemText>Reward</ListItemText>
							</Link>
						</MenuItem>
						<Divider />
						<MenuItem>
							<Link
								to="/detail/order-history"
								color="black"
							>
								<ListItemText>
									Order History
								</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/detail/orders" color="black">
								<ListItemText>List Ordrer</ListItemText>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/detail/voucher" color="black">
								<ListItemText>Voucher</ListItemText>
							</Link>
						</MenuItem>
						<Divider />
						<MenuItem>
							<Link
								to="/detail/notification"
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
