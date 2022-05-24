import React from "react";
import { Grid, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useStore } from "../stores";
import { ServicesChooseGroup } from "./Service";

export const CompanyInfo = () => {
	const { sSignUp } = useStore();

	return (
		<Grid container spacing={2} padding={"2rem"}>
			<Grid item>
				<h2>Thông tin doanh nghiệp</h2>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">
						Tên doanh nghiệp
					</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Tên doanh nghiệp"
						name="address"
						required
						defaultValue={sSignUp.user.address}
						onChange={(event) => {
							sSignUp.user.companyName =
								event.target.value;
						}}
					/>
				</FormControl>
			</Grid>
			<ServicesChooseGroup
				addList={sSignUp.add_services}
				removeList={sSignUp.remove_service}
			/>
		</Grid>
	);
};
