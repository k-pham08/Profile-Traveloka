import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Select, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [role, setRole] = React.useState("");

	const handleRoleChange = (event: SelectChangeEvent) => {
		setRole(event.target.value as string);
	};

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				Add
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Create new user</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="Username"
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
						variant="standard"
					/>
					<FormControl sx={{ mt: 2, width: "25ch" }}>
						<InputLabel id="role-select-label">
							Role
						</InputLabel>
						<Select
							labelId="role-select-label"
							id="role-select"
							label="Role"
							value={role}
							onChange={handleRoleChange}
						>
							<MenuItem value={10}>ADMIN</MenuItem>
							<MenuItem value={20}>Partner</MenuItem>
							<MenuItem value={30}>Customer</MenuItem>
						</Select>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Create</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
