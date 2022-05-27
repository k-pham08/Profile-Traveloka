import { FC } from "react";
import { MenuItem as MenuItemType } from "../../models/types";
import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DropdownSetting: FC<{
	menu: MenuItemType[];
	closeHandle: Function;
}> = ({ menu, closeHandle }) => {
	const navigator = useNavigate();
	return (
		<>
			{menu.map(({ title, handle, link, icon }, index) => (
				<MenuItem
					key={title}
					onClick={() => {
						if (handle) handle();
						else if (link) {
							navigator(link);
						} else closeHandle();
					}}
				>
					<Typography
						textAlign="center"
						sx={{
							width: "fit-content",
							display: "flex",
							justifyContent: "center",
						}}
					>
						{icon && (
							<img
								src={icon}
								style={{ marginRight: "1rem" }}
							/>
						)}
						{title}
					</Typography>
				</MenuItem>
			))}
		</>
	);
};
