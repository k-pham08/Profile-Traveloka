import * as React from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
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

export default function SearchShuttle() {
	const [date, setDate] = React.useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
	const [value, setValue] = React.useState<Date | null>(null);
	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};
	return (
		<Box
			sx={{
				width: "70%",
				bgcolor: "background.paper",
				padding: "1rem",
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			<FormControl style={{ width: "40%", marginRight: "2rem" }}>
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
			<FormControl style={{ width: "50%", marginRight: "1rem" }}>
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
			<FormControl
				sx={{ width: "40%", marginRight: "2rem" }}
				variant="outlined"
			>
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
			<FormControl>
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
			<Button
				variant="contained"
				style={{ height: "fit-content", margin: "auto" }}
			>
				Tìm kiếm dịch vụ
			</Button>
		</Box>
	);
}
