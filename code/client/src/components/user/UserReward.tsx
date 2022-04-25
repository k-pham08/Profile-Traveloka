import { Fragment } from "react";
import {
	Paper,
	Typography,
	Button,
	CardContent,
	CardActions,
	Card,
} from "@mui/material";

const card = (
	<Fragment>
		<CardContent>
			<h2>Avialable Reward</h2>
			<Typography variant="h2" component="div">
				0
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				Value 0 VND
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Detail</Button>
		</CardActions>
	</Fragment>
);

export const UserReward = () => {
	return (
		<Paper>
			<Card variant="outlined">{card}</Card>
		</Paper>
	);
};
