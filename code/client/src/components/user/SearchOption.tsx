import { FC, useState } from "react";

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";
import { SERVICE_ICON, SERVICES } from "../../utils/constraint";

export const SearchOption: FC<{ parentCallback: any }> = ({
	parentCallback,
}) => {
	const [option, setOption] = useState("");

	return (
		<Paper
			sx={{
				width: "30%",
				bgcolor: "background.paper",
				background: "rgba(242,243,243,1.00)",
			}}
		>
			<nav aria-label="main mailbox folders">
				<List>
					{SERVICES.map((service, index) => (
						<ListItem
							button
							key={service.code}
							onClick={() => {
								setOption(service.code);
								parentCallback(service.code);
							}}
						>
							<ListItemIcon>
								<img
									src={SERVICE_ICON[index]}
									alt="Service Icon"
								></img>
							</ListItemIcon>
							<div></div>
							<ListItemText primary={service.name} />
						</ListItem>
					))}
				</List>
			</nav>
		</Paper>
	);
};
