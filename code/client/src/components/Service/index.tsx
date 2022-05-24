import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { store, useStore } from "../../stores";

export const ServicesChooseGroup: FC<{}> = observer(() => {
	const { services, sSignUp } = useStore();

	return (
		<>
			{services.map((service) => (
				<Grid key={service.serviceCode} item xs={2}>
					<FormControlLabel
						control={
							<Checkbox
								onChange={(event) => {
									if (event.target.checked) {
										sSignUp.add_services(
											service.serviceCode
										);
									} else {
										sSignUp.remove_service(
											service.serviceCode
										);
									}
								}}
							/>
						}
						label={service.serviceName}
						// onChange={(event) =>
						// 	sSignUp.set_services(service.code)
						// }
					/>
				</Grid>
			))}
		</>
	);
});
