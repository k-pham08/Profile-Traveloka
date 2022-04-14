import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Select, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";

export default function UserInfo() {
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

	return (
		<Paper sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}>
			<h2 style={{ margin: "1rem" }}>Personal Detail</h2>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment">
					Full name
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment"
					value={values.amount}
					startAdornment={
						<InputAdornment position="start"></InputAdornment>
					}
					label="fullname"
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }}>
				<InputLabel id="demo-simple-select-label">
					Gender
				</InputLabel>
				<Select
					labelId="gender-select-label"
					id="gender-select"
					label="Gender"
					value={gender}
					onChange={handleGenderChange}
				>
					<MenuItem value={10}>Male</MenuItem>
					<MenuItem value={20}>Female</MenuItem>
					<MenuItem value={30}>Other</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Date desktop"
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
				<InputLabel htmlFor="outlined">Address</InputLabel>
				<OutlinedInput id="outlined" label="Address" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "50ch" }}>
				<InputLabel htmlFor="outlined">Email</InputLabel>
				<OutlinedInput id="outlined" label="Email" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1, width: "40ch" }}>
				<InputLabel htmlFor="outlined">Phone number</InputLabel>
				<OutlinedInput id="outlined" label="Phone-number" />
			</FormControl>
			<FormControl fullWidth sx={{ m: 1 }}>
				<Button variant="contained">Save</Button>
			</FormControl>
		</Paper>
	);
}
