import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
	Select,
	SelectChangeEvent,
	MenuItem,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	TextField,
} from "@mui/material";

export const UserInfo = () => {
	const [date, setDate] = useState<Date | null>(new Date());

	const [gender, setGender] = useState("");

	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};

	const handleGenderChange = (event: SelectChangeEvent) => {
		setGender(event.target.value as string);
	};

	return (
		<div style={{ marginRight: "1rem" }}>
			<h2 style={{ margin: "1rem" }}>Thông tin cá nhân</h2>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment">
					Tên đầy đủ
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment"
					//value={name}
					startAdornment={
						<InputAdornment position="start"></InputAdornment>
					}
					label="Tên đầy đủ"
					name="name"
					required
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }}>
				<InputLabel id="demo-simple-select-label">
					Giới tính
				</InputLabel>
				<Select
					labelId="gender-select-label"
					id="gender-select"
					label="Giới tính"
					name="gender"
					value={gender}
					onChange={handleGenderChange}
					required
				>
					<MenuItem value={0}>Nam</MenuItem>
					<MenuItem value={1}>Nữ</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Ngày sinh"
						inputFormat="MM/dd/yyyy"
						value={date}
						onChange={handleDateChange}
						renderInput={(params: any) => (
							<TextField name="dob" {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<FormControl fullWidth sx={{ m: 1 }}>
				<InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
				<OutlinedInput
					id="outlined"
					label="Địa chỉ"
					name="address"
					required
				/>
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
				<InputLabel htmlFor="outlined">Email</InputLabel>
				<OutlinedInput
					id="outlined"
					label="Email"
					name="email"
					type="email"
					//value={values.email}
					required
				/>
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
				<InputLabel htmlFor="outlined">Số điện thoại</InputLabel>
				<OutlinedInput
					id="outlined"
					label="Số điện thoại"
					name="phone"
					//value={values.phone}
					required
				/>
			</FormControl>
		</div>
	);
};
