import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";
import { SERVICES } from "../../utils/constraint";

export const SearchOption: FC<{ parentCallback: any }> = ({
	parentCallback,
}) => {
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
							key={service.name}
							onClick={() => parentCallback(service.code)}
						>
							<ListItemIcon>
								<img
									src={service.icon}
									alt="Service Icon"
								></img>
							</ListItemIcon>
							<ListItemText primary={service.name} />
						</ListItem>
					))}
				</List>
			</nav>
		</Paper>
	);
};
