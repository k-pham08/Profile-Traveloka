import { useState, KeyboardEvent, MouseEvent, Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Divider,
	ListItemText,
	ListItemIcon,
	ListItem,
	List,
	Drawer,
	Box,
} from "@mui/material";

import {
	SERVICES,
	SERVICE_ICON,
	DRAWER_ITEMS,
	DRAWER_ICONS,
} from "../../utils/constraint";

type Anchor = "left";

export const UserDrawer = () => {
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as KeyboardEvent).key === "Tab" ||
					(event as KeyboardEvent).key === "Shift")
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
				{DRAWER_ITEMS.map((item, index) => (
					<ListItem button key={item.title}>
						<ListItemIcon>
							<img
								src={DRAWER_ICONS[index]}
								alt="Menu Icon"
							></img>
						</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{SERVICES.map((service, index) => (
					<ListItem button key={service}>
						<ListItemIcon>
							<img
								src={SERVICE_ICON[index]}
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
		<Fragment key="left">
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
		</Fragment>
	);
};
