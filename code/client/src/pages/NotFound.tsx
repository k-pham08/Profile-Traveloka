import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { ErrorOutline, ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

export const NotFound: FC = () => {
	const router = useParams();
	const navigator = useNavigate();

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
			<Typography variant="subtitle2" align="center">
				/{router["*"]}
			</Typography>
			<Button
				variant="outlined"
				onClick={() => {
					navigator("/");
				}}
				startIcon={<ArrowBack />}
			>
				Back
			</Button>
		</Grid>
	);
};
