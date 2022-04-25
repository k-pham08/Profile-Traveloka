import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IconButton } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function UserChangePassword() {
	interface State {
		amount: string;
		password: string;
		weight: string;
		weightRange: string;
		showPassword: boolean;
	}
	const [values, setValues] = React.useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

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

	const handleChange =
		(prop: keyof State) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	return (
		<Paper
			elevation={12}
			sx={{ display: "flex", flexWrap: "wrap", mb: 2, mt: 4 }}
		>
			<h2 style={{ margin: "1rem" }}>Đổi mật khẩu</h2>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment-password">
					Mật khẩu cũ
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
								onMouseDown={handleMouseDownPassword}
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
					label="Mật khẩu cũ"
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: 1 }} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">
					Mật khẩu mới
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
								onMouseDown={handleMouseDownPassword}
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
					label="Mật khẩu mới"
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: 1 }} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">
					Xác nhận mật khẩu
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
								onMouseDown={handleMouseDownPassword}
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
			<FormControl sx={{ m: 1 }}>
				<Button variant="contained">Lưu</Button>
			</FormControl>
			<FormControl sx={{ m: 1 }}>
				<Button variant="contained" style={{ background: "red" }}>
					Hủy
				</Button>
			</FormControl>
		</Paper>
	);
}
