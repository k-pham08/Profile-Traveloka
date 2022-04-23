import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const card = (
	<React.Fragment>
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
	</React.Fragment>
);

export default function UserReward() {
	return (
		<Paper>
			<Card variant="outlined">{card}</Card>
		</Paper>
	);
}
