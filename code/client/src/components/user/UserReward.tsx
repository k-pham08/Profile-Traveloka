import { Fragment } from "react";
import {
	Paper,
	Typography,
	Button,
	CardContent,
	CardActions,
	Card,
} from "@mui/material";
import { useStore } from "../../stores";


export const UserReward = () => {
	const {sProfile} = useStore();
	return (
		<Paper>
			<Card variant="outlined">
				<Fragment>
					<CardContent>
						<h2>Avialable Reward</h2>
						<Typography variant="h2" component="div">
							{sProfile.user.reward}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							Value {sProfile.user.reward} VND
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Detail</Button>
					</CardActions>
				</Fragment>
			</Card>
		</Paper>
	);
};
