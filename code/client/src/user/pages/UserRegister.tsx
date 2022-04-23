import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IconButton, Select, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import UserNavbar from "../components/UserNavbar";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function UserRegister() {
	const [date, setDate] = React.useState<Date | null>(
		new Date("2022-08-18T21:11:54")
	);

	const [values, setValues] = React.useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleDateChange = (newValue: Date | null) => {
		setDate(newValue);
	};

	const [gender, setGender] = React.useState("");

	const handleGenderChange = (event: SelectChangeEvent) => {
		setGender(event.target.value as string);
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<div>
			<UserNavbar></UserNavbar>
			<Paper
				elevation={12}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					margin: "auto",
					marginTop: "2rem",
					width: "50%",
				}}
			>
				<h2 style={{ margin: "1rem" }}>Đăng ký tài khoản</h2>
				<FormControl sx={{ m: 1, width: 1 }}>
					<InputLabel htmlFor="outlined-adornment">
						Tên đầy đủ
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment"
						value={values.amount}
						startAdornment={
							<InputAdornment position="start"></InputAdornment>
						}
						label="Tên đầy đủ"
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
						value={gender}
						onChange={handleGenderChange}
					>
						<MenuItem value={10}>Nam</MenuItem>
						<MenuItem value={20}>Nữ</MenuItem>
					</Select>
				</FormControl>
				<FormControl
					sx={{ m: 1, width: "25ch" }}
					variant="outlined"
				>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Ngày sinh"
							inputFormat="MM/dd/yyyy"
							value={date}
							onChange={handleDateChange}
							renderInput={(params: any) => (
								<TextField {...params} />
							)}
						/>
					</LocalizationProvider>
				</FormControl>
				<FormControl fullWidth sx={{ m: 1 }}>
					<InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
					<OutlinedInput id="outlined" label="Địa chỉ" />
				</FormControl>
				<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
					<InputLabel htmlFor="outlined">Email</InputLabel>
					<OutlinedInput id="outlined" label="Email" />
				</FormControl>
				<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
					<InputLabel htmlFor="outlined">
						Số điện thoại
					</InputLabel>
					<OutlinedInput id="outlined" label="Số điện thoại" />
				</FormControl>
				<h2 style={{ width: "100%", margin: "1rem" }}>
					Tạo tài khoản
				</h2>
				<FormControl fullWidth sx={{ m: 1, width: 1 }}>
					<InputLabel htmlFor="outlined">
						Tên đăng nhập
					</InputLabel>
					<OutlinedInput id="outlined" label="Tên đăng nhập" />
				</FormControl>
				<FormControl sx={{ m: 1, width: 1 }}>
					<InputLabel htmlFor="outlined-adornment-password">
						Mật khẩu
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={
										handleMouseDownPassword
									}
									edge="end"
								>
									{values.showPassword ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						}
						label="Mật khẩu"
					/>
				</FormControl>
				<FormControl sx={{ m: 1, width: 1 }}>
					<InputLabel htmlFor="outlined-adornment-password">
						Xác nhận mật khẩu
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={
										handleMouseDownPassword
									}
									edge="end"
								>
									{values.showPassword ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						}
						label="Xác nhận mật khẩu"
					/>
				</FormControl>
				<FormControl fullWidth sx={{ m: 1 }}>
					<Button variant="contained">Đăng ký</Button>
				</FormControl>
			</Paper>
		</div>
	);
}
