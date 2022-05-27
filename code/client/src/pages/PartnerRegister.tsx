import { FC, useState } from "react";
import { BasicLayout } from "../layouts/BasicLayout";
import { UserInfo } from "../components/user/UserInfo";
import { CompanyInfo } from "../components/CompanyInfo";
import { CreateAccount } from "../components/CreateAccount";
import { Paper, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useStore } from "../stores";
import { useNavigate } from "react-router-dom";

export const PartnerRegister: FC = () => {
	const { sSignUp, isLoggedIn } = useStore();
	const navigator = useNavigate();

	const { enqueueSnackbar } = useSnackbar();
	const [submitting, setSubmitting] = useState(false);

	const handleSignUp = () => {
		if (sSignUp.password !== sSignUp.confirm) {
			enqueueSnackbar("Mật khẩu không khớp", { variant: "error" });
			return;
		}
		sSignUp.doSignUp().then(([err, data]) => {
			if (err)
				return enqueueSnackbar(err.message, {
					variant: "error",
				});

			navigator("/Login");

			return enqueueSnackbar("Đăng ký thành công", {
				variant: "success",
			});
		});
	};
	return (
		<BasicLayout>
			<Paper
				elevation={12}
				style={{
					width: "80%",
					margin: "2rem auto",
				}}
			>
				<UserInfo
					setUser={sSignUp.get_User()}
					isView={false}
					user={sSignUp.user}
				/>
				<CompanyInfo />
				{!isLoggedIn && <CreateAccount />}
				<Button
					variant="contained"
					disabled={submitting}
					style={{ margin: "0 0 2rem 2rem" }}
					onClick={handleSignUp}
				>
					Đăng ký đối tác
				</Button>
			</Paper>
		</BasicLayout>
	);
};
