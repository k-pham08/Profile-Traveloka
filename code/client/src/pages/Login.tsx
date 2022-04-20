import {
	Grid,
	Typography,
	TextField,
	Button,
	Box,
	Avatar,
} from "@mui/material";
import { FC, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { srcIcon } from "../utils/constraint";
import { setTitle } from "../utils/set_title";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
			backgroundColor: "#1976d2",
		},
		loginForm: {
			backgroundColor: "#fff",
			padding: "3rem 5rem 1rem 5rem !important",
		},
		marginTop: {
			marginTop: "1rem !important",
		},
		avatar: {
			marginRight: "auto",
			marginLeft: "auto",
			marginBottom: "1rem",
		},
	})
);

const Copyright: FC = () => {
	return (
		<Typography variant="body2" align="center">
			Copyright © Traveloka {new Date().getFullYear()}.
		</Typography>
	);
};

export const Login: FC = () => {
	const classes = useStyles();
	useEffect(() => {
		setTitle("Login Traveloka");
	}, []);
	const handleLogin = () => {};
	return (
		<div className={classes.root}>
			<Grid container direction="column" alignItems="center">
				<Grid item xs={1} sm={3} className={classes.loginForm}>
					<Avatar
						className={classes.avatar}
						variant="square"
						src={srcIcon}
						sx={{ width: 64, height: 64 }}
					/>
					<Typography align="center" variant="h4">
						Login Traveloka
					</Typography>

					<TextField
						fullWidth={true}
						id="username"
						label="Username"
						variant="outlined"
						className={classes.marginTop}
					/>
					<TextField
						fullWidth={true}
						id="password"
						label="Password"
						variant="outlined"
						className={classes.marginTop}
					/>
					<Button
						fullWidth={true}
						variant="contained"
						className={classes.marginTop}
						onClick={handleLogin}
					>
						Login
					</Button>
					<Box mt={6}>
						<Copyright />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
