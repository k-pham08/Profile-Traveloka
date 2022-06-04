import {
	Avatar,
	Box,
	Button,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { APP_NAME, PRIMARY_COLOR, srcIcon } from "../utils/constraint";
import { setTitle } from "../utils/set_title";
import { useStore } from "../stores";
import { useSnackbar } from "notistack";
import { ERROR } from "../utils/messageTerms";
import { observer } from "mobx-react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import { theme } from "../utils/theme";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
			backgroundColor: PRIMARY_COLOR,
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

const NotHaveAccount: FC = () => {
	return (
		<>
			<Typography>
				Bạn chưa có tài khoản?{" "}
				<Link
					to={"/signup"}
					style={{
						color: PRIMARY_COLOR,
						marginTop: theme.spacing(2),
					}}
				>
					Đăng kí
				</Link>
			</Typography>
		</>
	);
};

export const Login: FC<{}> = observer(() => {
	const { sSignIn} = useStore();
	const { enqueueSnackbar } = useSnackbar();
	const classes = useStyles();
	const [submitting, setSubmitting] = useState(false);
	const redirect: string = useSearchParams()[0].get("redirect") || "";
	useEffect(() => {
		setTitle("Đăng Nhập Traveloka");
	}, []);

	const handleLogin = () => {
		if (!sSignIn.username || !sSignIn.password) {
			enqueueSnackbar(ERROR.LOGIN_INVALID, { variant: "error" });
			return;
		}

		setSubmitting(true);
		sSignIn
			.doLogin(redirect)
			.then((err) => {
				if (err) return enqueueSnackbar(err, { variant: "error" });
			})
			.catch(function (error) {
				enqueueSnackbar(error.message, { variant: "error" });
			})
			.finally(() => setSubmitting(false));
	};
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
						Login {APP_NAME}
					</Typography>

					<TextField
						fullWidth={true}
						id="username"
						label="Tên Đăng Nhập"
						variant="outlined"
						className={classes.marginTop}
						defaultValue={sSignIn.username}
						onChange={(event) =>
							sSignIn.set_username(event.target.value)
						}
					/>
					<TextField
						fullWidth={true}
						id="password"
						label="Mật Khẩu"
						type="password"
						variant="outlined"
						className={classes.marginTop}
						defaultValue={sSignIn.password}
						onChange={(event) =>
							sSignIn.set_password(event.target.value)
						}
					/>
					<Button
						fullWidth={true}
						variant="contained"
						className={classes.marginTop}
						onClick={handleLogin}
						disabled={submitting}
					>
						Đăng nhập
					</Button>

					<NotHaveAccount />

					<Box mt={6}>
						<Copyright />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
});
