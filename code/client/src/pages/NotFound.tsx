import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { ErrorOutline, ArrowBack } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

export const NotFound: FC = () => {
	const history = useHistory();

	return (
		<Grid
			container
			direction="column"
			alignItems={"center"}
			justifyContent={"center"}
			height="100vh"
			spacing={2}
		>
			<ErrorOutline sx={{ fontSize: "5rem" }} />
			<Typography variant="h3" align="center">
				NOT FOUND 404
			</Typography>
			<Typography variant="subtitle2" align="center"></Typography>
			<Button
				variant="outlined"
				onClick={() => {
					history.push("/");
				}}
				startIcon={<ArrowBack />}
			>
				Back
			</Button>
		</Grid>
	);
};
