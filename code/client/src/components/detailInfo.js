import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
export default function InputAdornments() {
	const [values, setValues] = React.useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Box sx={{ display: "flex", flexWrap: "wrap" }}>
			<div>
				<FormControl fullWidth sx={{ m: 1 }}>
					<InputLabel htmlFor="outlined-adornment-amount">
						Full name
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-amount"
						value={values.amount}
						onChange={handleChange("amount")}
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
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Gender"
						onChange={handleChange}
					>
						<MenuItem value={10}>Male</MenuItem>
						<MenuItem value={20}>Female</MenuItem>
						<MenuItem value={30}>Other</MenuItem>
					</Select>
				</FormControl>
				<FormControl
					sx={{ m: 1, width: "25ch" }}
					variant="outlined"
				></FormControl>
				<FormControl
					sx={{ m: 1, width: "25ch" }}
					variant="outlined"
				>
					<InputLabel htmlFor="outlined-adornment-password">
						Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
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
						label="Password"
					/>
				</FormControl>
			</div>
		</Box>
	);
}
