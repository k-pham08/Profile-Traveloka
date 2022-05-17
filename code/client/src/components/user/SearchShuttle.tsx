import * as React from "react";
import {
	Grid,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import {
	DesktopDatePicker,
	LocalizationProvider,
	TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const SearchShuttle = () => {
	const [date, setDate] = React.useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
	const [value, setValue] = React.useState<Date | null>(null);
	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};
	return (
		<Grid container spacing={2} padding={"1rem"}>
			<Grid item xs={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Từ sân bay
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Tu san bay"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={8}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Đến khu vực, địa chỉ, tòa nhà
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Đến khu vực, địa chỉ, tòa nhà"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth variant="outlined">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Ngày đón"
							inputFormat="MM/dd/yyyy"
							value={date}
							onChange={handleDateChange}
							renderInput={(params: any) => (
								<TextField {...params} />
							)}
						/>
					</LocalizationProvider>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							label="Giờ đón"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => (
								<TextField {...params} />
							)}
						/>
					</LocalizationProvider>
				</FormControl>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					style={{ height: "fit-content", margin: "auto" }}
				>
					Tìm kiếm dịch vụ
				</Button>
			</Grid>
		</Grid>
	);
};
