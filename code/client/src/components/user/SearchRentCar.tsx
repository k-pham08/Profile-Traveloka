import { useState } from "react";
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

export const SearchRentCar = () => {
	const [date, setDate] = useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
	const [value, setValue] = useState<Date | null>(null);
	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};
	return (
		<Grid container spacing={2} padding={"1rem"}>
			<Grid item xs={5}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Cho thuê xe
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Cho thuê xe"
					>
						<MenuItem value={10}>Tự lái</MenuItem>
						<MenuItem value={20}>Có người lái</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Địa điểm thuê xe của bạn
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Địa điểm thuê xe của bạn"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={5}>
				<FormControl fullWidth variant="outlined">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Ngày bắt đầu"
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
			<Grid item xs={5}>
				<FormControl fullWidth>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							label="Giờ bắt đầu"
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
			<Grid item xs={5}>
				<FormControl fullWidth variant="outlined">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Ngày kết thúc"
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
			<Grid item xs={5}>
				<FormControl fullWidth>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							label="Giờ kết thúc"
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
					Tìm kiếm xe
				</Button>
			</Grid>
		</Grid>
	);
};
