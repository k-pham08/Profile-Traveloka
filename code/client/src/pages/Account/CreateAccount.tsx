import { FC, useState, MouseEvent } from "react";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const CreateAccount: FC = () => {
	const [values, setValues] = useState({
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<div style={{ marginRight: "1rem" }}>
			<h2 style={{ width: "100%", margin: "1rem" }}>Tạo tài khoản</h2>
			<FormControl fullWidth sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined">Tên đăng nhập</InputLabel>
				<OutlinedInput
					id="outlined"
					label="Tên đăng nhập"
					name="username"
					//value={values.username}
					required
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment-password">
					Mật khẩu
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type={values.showPassword ? "text" : "password"}
					//value={values.password}
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
					label="Mật khẩu"
					name="password"
					required
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: 1 }}>
				<InputLabel htmlFor="outlined-adornment-password">
					Xác nhận mật khẩu
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type={values.showPassword ? "text" : "password"}
					//value={values.password}
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
					name="confirmPassword"
					required
				/>
			</FormControl>
		</div>
	);
};
