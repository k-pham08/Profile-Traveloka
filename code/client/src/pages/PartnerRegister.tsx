import { FC, useState } from "react";
import { BasicLayout } from "../layouts/BasicLayout";
import { UserInfo } from "../components/user/UserInfo";
import { CompanyInfo } from "../components/CompanyInfo";
import { Paper, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useStore } from "../stores";

export const PartnerRegister: FC = () => {
	const { sPartner } = useStore();

	const { enqueueSnackbar } = useSnackbar();
	const [subminting, setSubmitting] = useState(false);

	const handleSignUp = () => {
		setSubmitting(true);
		sPartner
			.doPartnerSignUp()
			.then((err) => {
				if (err[0]?.message) {
					return enqueueSnackbar(err[0]?.message, {
						variant: "error",
					});
				} else {
					return enqueueSnackbar("Đăng ký thành công", {
						variant: "success",
					});
				}
			})
			.catch(function (error) {
				enqueueSnackbar(error.message, { variant: "error" });
			})
			.finally(() => setSubmitting(false));
	};

	return (
		<BasicLayout>
			<Paper elevation={12}>
				<UserInfo></UserInfo>
				<CompanyInfo></CompanyInfo>
				<Button
					variant="contained"
					onClick={handleSignUp}
					disabled={subminting}
					style={{ margin: "0 0 2rem 2rem" }}
				>
					Đăng ký đối tác
				</Button>
			</Paper>
		</BasicLayout>
	);
};
