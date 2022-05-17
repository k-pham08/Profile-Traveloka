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
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const SearchHotel = () => {
	const [date, setDate] = useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};
	return (
		<Grid container spacing={2} padding={"1rem"}>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Thành phố, địa điểm hoặc tên khách sạn
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Thành phố, địa điểm hoặc tên khách sạn"
					>
						<MenuItem value={10}>Hà Nội</MenuItem>
						<MenuItem value={20}>TP HCM</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={5}>
				<FormControl variant="outlined" fullWidth>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Nhận phòng"
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
			<Grid item xs={7}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Số đêm
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Số đêm"
					>
						<MenuItem value={10}>1 đêm</MenuItem>
						<MenuItem value={20}>2 đêm</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Số phòng
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Số phòng"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Số hành khách
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Số hành khách"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant="contained"
					style={{ height: "fit-content", margin: "auto" }}
				>
					Tìm khách sạn
				</Button>{" "}
			</Grid>
		</Grid>
	);
};
