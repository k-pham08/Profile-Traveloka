import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import FormDialog from "../components/formDialog";

function createData(username: string, password: string, role: string) {
	return { username, password, role };
}

const rows = [
	createData("admin", "admin", "ADMIN"),
	createData("khoapham", "khoapham", "USER"),
];

export default function Account() {
	return (
		<TableContainer
			component={Paper}
			sx={{ width: 4 / 5, margin: "auto" }}
		>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Username</TableCell>
						<TableCell align="right">Password</TableCell>
						<TableCell align="right">Role</TableCell>
						<TableCell align="right">
							<FormDialog></FormDialog>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.username}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell component="th" scope="row">
								{row.username}
							</TableCell>
							<TableCell align="right">
								{row.password}
							</TableCell>
							<TableCell align="right">
								{row.role}
							</TableCell>
							<TableCell align="right">
								<Stack spacing={2} direction="row">
									<Button variant="outlined">
										Edit
									</Button>
									<Link
										to="/detail"
										style={{
											textDecoration: "none",
										}}
									>
										<Button variant="outlined">
											Detail
										</Button>
									</Link>
									<Button variant="contained">
										Delete
									</Button>
								</Stack>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
