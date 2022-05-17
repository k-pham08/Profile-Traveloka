import { useState } from "react";
import {
	Grid,
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

export const SearchCombo = () => {
	const [date, setDate] = useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);
	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};
	return (
		<Grid container spacing={2} padding={"1rem"}>
			<Grid item xs={12}>
				<h2>Chi tiết chuyến bay</h2>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Từ
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Tu"
					>
						<MenuItem value={10}>HCM</MenuItem>
						<MenuItem value={20}>Hà Nội</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
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
			</Grid>
			<Grid item xs={9}>
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">
						Hạng ghế
					</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Hạng ghế"
					>
						<MenuItem value={10}>Phổ thông</MenuItem>
						<MenuItem value={20}>Thương gia</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={3}>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Khứ hồi"
				/>
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
			<Grid item xs={6}>
				<FormControl variant="outlined">
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
			</Grid>
			<Grid item xs={12}>
				<h2>Chi tiết khách sạn</h2>
			</Grid>
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
					Tìm combo tiết kiệm
				</Button>
			</Grid>
		</Grid>
	);
};
