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
		<Paper elevation={8}>
			<Card variant="outlined">
				<Fragment>
					<CardContent>
						<h2>Điểm thưởng hiện có</h2>
						<Typography variant="h2" component="div">
							{sProfile.user.reward}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							Trị giá {sProfile.user.reward} VND
						</Typography>
					</CardContent>
					<CardActions>
					</CardActions>
				</Fragment>
			</Card>
		</Paper>
	);
};
