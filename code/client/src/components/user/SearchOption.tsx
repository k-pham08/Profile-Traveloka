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
					{SERVICES.map((service, index) => (
						<ListItem button key={service}>
							<ListItemIcon>
								<img
									src={SERVICE_ICON[index]}
									alt="Service Icon"
								></img>
							</ListItemIcon>
							<ListItemText primary={service} />
						</ListItem>
					))}
				</List>
			</nav>
		</Paper>
	);
};
