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
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function SearchFlight() {
	const [date, setDate] = React.useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
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
			<FormControl style={{ width: "10rem", marginRight: "2rem" }}>
				<InputLabel id="demo-simple-select-label">Từ</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Tu"
				>
					<MenuItem value={10}>HCM</MenuItem>
					<MenuItem value={20}>Hà Nội</MenuItem>
				</Select>
			</FormControl>
			<FormControl style={{ width: "10rem", marginRight: "1rem" }}>
				<InputLabel id="simple-select-label">Đến</InputLabel>
				<Select
					labelId="simple-select-label"
					id="simple-select"
					label="Đến"
				>
					<MenuItem value={10}>HCM</MenuItem>
					<MenuItem value={20}>Hà Nội</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label="Khứ hồi"
			/>
			<FormControl style={{ marginRight: "1rem" }} fullWidth>
				<InputLabel id="simple-select-label">Hạng ghế</InputLabel>
				<Select
					labelId="simple-select-label"
					id="simple-select"
					label="Hạng ghế"
				>
					<MenuItem value={10}>Phổ thông</MenuItem>
					<MenuItem value={20}>Thương gia</MenuItem>
				</Select>
			</FormControl>
			<FormControl style={{ marginRight: "1rem", width: "30%" }}>
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
			<FormControl sx={{ width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Ngày đi"
						inputFormat="MM/dd/yyyy"
						value={date}
						onChange={handleDateChange}
						renderInput={(params: any) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<Button
				variant="contained"
				style={{ height: "fit-content", margin: "auto" }}
			>
				Tìm chuyến bay
			</Button>
		</Box>
	);
}
