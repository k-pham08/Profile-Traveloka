import { SyntheticEvent } from "react";
import { FormControl, Button, Alert, Paper } from "@mui/material";
import { UserNavbar } from "../../components/user";
import { CreateAccount } from "../Account";
import { UserInfo } from "../../components/user";
import axios from "axios";

export const UserRegister = () => {
	const submitHandler = (event: SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & {
			name: { value: string };
			gender: { value: boolean };
			dob: { value: string };
			address: { value: string };
			email: { value: string };
			phone: { value: string };
			username: { value: string };
			password: { value: string };
			confirmPassword: { value: string };
		};
		const body = {
			username: target.username.value,
			password: target.password.value,
			name: target.name.value,
			email: target.email.value,
			gender: target.gender.value,
			dob: new Date(target.dob.value),
			phone: parseInt(target.dob.value),
			address: target.address.value,
			job: "",
			companyId: "",
		};
		if (target.password.value === target.confirmPassword.value) {
			axios.post("http://localhost:5000/user", body)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return <Alert severity="error">Password not match</Alert>;
		}
	};

	return (
		<div>
			<UserNavbar></UserNavbar>
			<Paper
				elevation={12}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					margin: "1rem auto",
					width: "50%",
				}}
			>
				<form onSubmit={submitHandler} style={{ margin: "auto" }}>
					<FormControl fullWidth>
						<UserInfo></UserInfo>
						<CreateAccount></CreateAccount>
						<Button
							variant="contained"
							type="submit"
							sx={{ m: 1 }}
						>
							Đăng ký
						</Button>
					</FormControl>
				</form>
			</Paper>
		</div>
	);
};
