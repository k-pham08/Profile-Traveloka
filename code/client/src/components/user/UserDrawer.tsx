import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

type Anchor = "left";
const items = [
	"Trang chủ",
	"Hợp tác với chúng tôi",
	"Đã Lưu",
	"Đặt chỗ của tôi",
];

const icons = [
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/455eab646e53732d81380eabadf10b47.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg",
];

const services = [
	"Vé máy bay",
	"Khách sạn",
	"Combo tiết kiệm",
	"Đưa đón sân bay",
	"Cho thuê xe",
];

const serIcons = [
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/14570d0f2b738b8dc8ef903949bce73c.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a55648c68713fc122a36183be900970c.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d5986586ed5208e79da32e193ee6114e.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c73be2b5ed63788de517755b48545c7b.svg",
	"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c21a03d3f725df0655ff334d38e0b0fd.svg",
];

export default function UserDrawer() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{items.map((item, index) => (
					<ListItem button key={item}>
						<ListItemIcon>
							<img
								src={icons[index]}
								alt="Menu Icon"
							></img>
						</ListItemIcon>
						<ListItemText primary={item} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{services.map((service, index) => (
					<ListItem button key={service}>
						<ListItemIcon>
							<img
								src={serIcons[index]}
								alt="Menu Icon"
							></img>
						</ListItemIcon>
						<ListItemText primary={service} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<React.Fragment key="left">
			<MenuIcon
				onClick={toggleDrawer("left", true)}
				style={{ cursor: "pointer", marginRight: "1rem" }}
			></MenuIcon>

			<Drawer
				open={state["left"]}
				onClose={toggleDrawer("left", false)}
			>
				{list("left")}
			</Drawer>
		</React.Fragment>
	);
}
