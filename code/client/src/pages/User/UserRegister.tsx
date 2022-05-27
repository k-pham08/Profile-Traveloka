import { FC, SyntheticEvent, useState } from "react";
import { FormControl, Button, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useSnackbar } from "notistack";
import { CreateAccount } from "../Account";
import { UserInfo } from "../../components/user";
import { BasicLayout } from "../../layouts/BasicLayout";
import { Grid } from "@material-ui/core";
import { useStore } from "../../stores";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_TRAVELOKA, PRIMARY_COLOR } from "../../utils/constraint";
import { theme } from "../../utils/theme";

export const HaveAccount = () => {
	return (
		<>
			<Typography paddingX={theme.spacing(2)}>
				Bạn đã có tài khoản?{" "}
				<Link
					to={"/login"}
					style={{
						color: PRIMARY_COLOR,
						marginTop: theme.spacing(2),
					}}
				>
					Đăng Nhập
				</Link>
			</Typography>
		</>
	);
};

export const UserRegister: FC<{}> = observer(() => {
	const navigator = useNavigate();

	const { sSignUp } = useStore();
	const { enqueueSnackbar } = useSnackbar();
	const [submitting, setSubmitting] = useState(false);

	const submitHandler = (event: SyntheticEvent) => {
		event.preventDefault();
		if (sSignUp.password !== sSignUp.confirm) {
			enqueueSnackbar("Mật khẩu không khớp", { variant: "error" });
			return;
		}
		sSignUp.doSignUp().then(([err, data]) => {
			if (err)
				return enqueueSnackbar(err.message, {
					variant: "error",
				});
			enqueueSnackbar("Đăng ký thành công", {
				variant: "success",
			});

			navigator("/login");
		});
	};

	console.log(sSignUp.user);

	return (
		<Grid container>
			<Paper elevation={12} sx={{ p: 2 }}>
				<Typography textAlign={"center"}>
					<img src={LOGO_TRAVELOKA} />
					<h1>Đăng Ký Tài Khoản Người Dùng</h1>
				</Typography>
				<FormControl fullWidth>
					<UserInfo user={sSignUp.user} isView={false} />
					<CreateAccount />
					<HaveAccount />
					<Button
						variant="contained"
						type="submit"
						sx={{ m: 1 }}
						disabled={submitting}
						onClick={submitHandler}
					>
						Đăng ký
					</Button>
				</FormControl>
			</Paper>
		</Grid>
	);
});
