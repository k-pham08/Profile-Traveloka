import { FC, SyntheticEvent, useState } from "react";
import { FormControl, Button, Paper } from "@mui/material";
import { observer } from "mobx-react-lite";

import { CreateAccount } from "../Account";
import { UserInfo } from "../../components/user";
import { BasicLayout } from "../../layouts/BasicLayout";
import { Grid } from "@material-ui/core";
import { useStore } from "../../stores";

export const UserRegister: FC<{}> = observer(() => {
	const { sSignUp } = useStore();
	const [submitting, setSubmitting] = useState(false);
	const submitHandler = (event: SyntheticEvent) => {
		sSignUp.doSignUp();
	};

	return (
		<BasicLayout>
			<Grid container>
				<Paper elevation={12} sx={{ p: 2 }}>
					<FormControl fullWidth>
						<UserInfo></UserInfo>
						<CreateAccount></CreateAccount>
						<Button
							variant="contained"
							type="submit"
							sx={{ margin: "0 2rem 2rem 2rem " }}
							disabled={submitting}
							onClick={submitHandler}
						>
							Đăng ký
						</Button>
					</FormControl>
				</Paper>
			</Grid>
		</BasicLayout>
	);
});
