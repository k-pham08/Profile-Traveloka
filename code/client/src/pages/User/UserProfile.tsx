import {
	UserNavbar,
	UserChangePassword,
	UserInfo,
} from "../../components/user";
import { Grid, Paper, MenuList, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import { USER_SETTINGS, MENU_ICONS } from "../../utils/constraint";
import {BasicLayout} from "../../layouts/BasicLayout";
import {UserSetting} from "../../components/Settings/UserSetting";

export const UserProfile = () => {
	return (
		<BasicLayout>
			<Grid container spacing={1}>
				<Grid item xs lg={4} >
					<Paper elevation={3}>
						<MenuList dense>
							<UserSetting closeHandle={() => {}} />
						</MenuList>
					</Paper>
				</Grid>
				<Grid item md={8} lg={8}>
					<Paper elevation={3} sx={{padding: "1rem"}}>
						<UserInfo />
						<UserChangePassword />
					</Paper>
				</Grid>
			</Grid>
		</BasicLayout>
	);
};
