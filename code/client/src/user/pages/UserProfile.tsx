import React from "react";
import UserNavbar from "../components/UserNavbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import UserInfo from "../../components/userInfo";
import UserChangePassword from "../components/UserChangePassword";

export default function UserProfile() {
	const settings = [
		"Chỉnh sửa hồ sơ",
		"Điểm thưởng của tôi",
		"Thẻ của tôi",
		"Danh sách giao dịch",
		"Đặt chỗ của tôi",
		"Thông báo giá vé máy bay",
		"Khuyến mãi",
		"Đăng xuất",
	];
	const menuIcons = [
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e092465666a2dfe398407794a893cbcc.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/468b3a08ab94b440b4e09fb9130eee1e.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0965a06a63e873adb97d5ed7d7b92dbe.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/70100d4a2047ac955124953dbc3351db.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cef9778118bdd85e1062cdd0b6196362.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg",
	];
	return (
		<div>
			<UserNavbar></UserNavbar>
			<Grid container spacing={2} mt={2}>
				<Grid item xs></Grid>
				<Grid item xs={3}>
					<Paper sx={{ width: 320 }} elevation={8}>
						<MenuList dense>
							{settings.map((setting, index) => (
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
											src={menuIcons[index]}
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
}
