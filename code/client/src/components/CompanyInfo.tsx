import React from "react";
import {
	Grid,
	FormControl,
	FormControlLabel,
	Checkbox,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { services } from "../utils/services";
import { useStore } from "../stores";

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
						defaultValue={sSignUp.address}
						onChange={(event) => {
							sSignUp.set_companyName(event.target.value);
						}}
					/>
				</FormControl>
			</Grid>
			{services.map((service) => (
				<Grid item xs={2}>
					<FormControlLabel
						control={
							<Checkbox
								onChange={(event) => {
									if (event.target.checked) {
										sSignUp.set_services(
											service.code
										);
									} else {
										sSignUp.remove_service(
											service.code
										);
									}
								}}
							/>
						}
						label={service.name}
						// onChange={(event) =>
						// 	sSignUp.set_services(service.code)
						// }
					/>
				</Grid>
			))}
		</Grid>
	);
};
