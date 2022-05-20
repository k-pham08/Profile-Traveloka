import { FC, useState } from "react";
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
	Grid,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { store, useStore } from "../../stores";
import { UserRole } from "../../models/types";

export const UserInfo: FC<{}> = observer(() => {
	const { sSignUp } = useStore();
	const [date, setDate] = useState<Date | null>(new Date());

	const handleDateChange = (
		newValue: unknown,
		keyboardInputValue?: string | undefined
	) => {
		if (newValue instanceof Date) {
			setDate(newValue);
			sSignUp.set_DOB(newValue);

			return newValue;
		}
	};

	const handleGenderChange = (event: SelectChangeEvent) => {
		sSignUp.set_gender(+event.target.value);
	};

	return (
		<Grid container spacing={2} padding={"2rem"}>
			<Grid item xs={12}>
				<h2>Thông tin cá nhân</h2>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined-adornment">
						Tên đầy đủ
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment"
						defaultValue={sSignUp.fullName}
						onChange={(event) => {
							sSignUp.set_fullName(event.target.value);
						}}
						startAdornment={
							<InputAdornment position="start"></InputAdornment>
						}
						label="Tên đầy đủ"
						name="name"
						required
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Giới tính
					</InputLabel>
					<Select
						labelId="gender-select-label"
						id="gender-select"
						label="Giới tính"
						name="gender"
						defaultValue={sSignUp.gender + ""}
						onChange={handleGenderChange}
						required
					>
						<MenuItem value={0}>Nam</MenuItem>
						<MenuItem value={1}>Nữ</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl variant="outlined" fullWidth>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DesktopDatePicker
							label="Ngày sinh"
							inputFormat="dd/MM/yyyy"
							value={sSignUp.dob}
							onChange={handleDateChange}
							renderInput={(params: any) => {
								return (
									<TextField
										name="dob"
										{...params}
									/>
								);
							}}
						/>
					</LocalizationProvider>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Địa chỉ"
						name="address"
						required
						defaultValue={sSignUp.address}
						onChange={(event) => {
							sSignUp.set_address(event.target.value);
						}}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">Email</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Email"
						name="email"
						type="email"
						defaultValue={sSignUp.email}
						onChange={(event) => {
							sSignUp.set_email(event.target.value);
						}}
						required
					/>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel htmlFor="outlined">
						Số điện thoại
					</InputLabel>
					<OutlinedInput
						id="outlined"
						label="Số điện thoại"
						name="phone"
						defaultValue={sSignUp.phone}
						onChange={(event) => {
							sSignUp.set_phone(event.target.value);
						}}
						required
					/>
				</FormControl>
			</Grid>
		</Grid>
	);
});
