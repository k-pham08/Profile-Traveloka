import {
	UserNavbar,
	UserChangePassword,
	UserInfo,
} from "../../components/user";
import { Grid, Paper, MenuList, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import { USER_SETTINGS, MENU_ICONS } from "../../utils/constraint";

export const UserProfile = () => {
	return (
		<div>
			<UserNavbar></UserNavbar>
			<Grid container spacing={2} mt={2}>
				<Grid item xs></Grid>
				<Grid item xs={3}>
					<Paper sx={{ width: 320 }} elevation={8}>
						<MenuList dense>
							{USER_SETTINGS.map((setting, index) => (
								<MenuItem
									key={setting}
									sx={{ color: "black" }}
								>
									<Link
										to="/user/account"
										style={{
											width: "fit-content",
											display: "flex",
											justifyContent: "center",
											textDecoration: "none",
										}}
									>
										<img
											src={MENU_ICONS[index]}
											alt="Menu"
											style={{
												marginRight: "1rem",
											}}
										/>
										<span
											style={{
												color: "black",
												fontWeight: "600",
											}}
										>
											{setting}
										</span>
									</Link>
								</MenuItem>
							))}
						</MenuList>
					</Paper>
				</Grid>
				<Grid item xs={7}>
					<UserInfo></UserInfo>
					<UserChangePassword></UserChangePassword>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</div>
	);
};
