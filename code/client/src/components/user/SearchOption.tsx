import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";
import { SERVICE_ICON, SERVICES } from "../../utils/constraint";

export const SearchOption = () => {
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
					{SERVICES.map(({code, name, icon}, index) => (
						<ListItem button key={code}>
							<ListItemIcon>
								<img
									src={icon}
									alt="Service Icon"
								></img>
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					))}
				</List>
			</nav>
		</Paper>
	);
};
