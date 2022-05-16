import { FC, useState } from "react";
import { countries } from "../utils/countries";
import { services } from "../utils/services";
import {
	Grid,
	Box,
	TextField,
	Autocomplete,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

export const CompanyInfo: FC<{}> = observer(() => {
	const { sPartner } = useStore();
	const [service, setService] = useState("");

	const handleServiceChange = (event: SelectChangeEvent) => {
		setService(event.target.value as string);
		sPartner.set_service(event.target.value);
	};

	return (
		<div>
			<h2 style={{ marginLeft: "2rem" }}>Thông tin công ty</h2>
			<Grid container spacing={2} style={{ padding: "2rem" }}>
				<Grid item xs={12}>
					<TextField
						fullWidth
						id="company-name"
						label="Tên công ty"
						variant="outlined"
						defaultValue={sPartner.companyName}
						onChange={(event) =>
							sPartner.set_companyName(event.target.value)
						}
					/>
				</Grid>
				<Grid item xs={8}>
					<Autocomplete
						id="country-select-demo"
						sx={{ width: "100%" }}
						options={countries}
						autoHighlight
						getOptionLabel={(option) => option.label}
						onChange={(event, value) => {
							sPartner.set_country(value?.label);
						}}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{
									"& > img": {
										mr: 2,
										flexShrink: 0,
									},
								}}
								{...props}
							>
								<img
									loading="lazy"
									width="20"
									src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
									srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								{option.label} ({option.code}) +
								{option.phone}
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Chọn quốc gia của bạn"
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", // disable autocomplete and autofill
								}}
							/>
						)}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						fullWidth
						id="company-phone"
						label="Số điện thoại"
						variant="outlined"
						defaultValue={sPartner.companyPhone}
						onChange={(event) =>
							sPartner.set_companyPhone(event.target.value)
						}
					/>
				</Grid>
				<Grid item xs={8}>
					<TextField
						fullWidth
						id="company-address"
						label="Địa chỉ công ty"
						variant="outlined"
						defaultValue={sPartner.companyAddress}
						onChange={(event) =>
							sPartner.set_companyAddress(
								event.target.value
							)
						}
					/>
				</Grid>
				<Grid item xs={4}>
					<FormControl fullWidth>
						<InputLabel id="company-service">
							Chọn dịch vụ
						</InputLabel>
						<Select
							labelId="company-service"
							id="company-service"
							value={service}
							label="Chon dich vu"
							onChange={handleServiceChange}
						>
							{services.map((ser) => (
								<MenuItem
									value={ser.code}
									defaultValue={ser.code}
								>
									{ser.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
});
