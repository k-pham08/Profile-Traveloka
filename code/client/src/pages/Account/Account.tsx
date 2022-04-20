import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Info } from "@mui/icons-material";

import FormDialog from "../../components/formDialog";
import { BasicLayout } from "../../layouts/BasicLayout";

function createData(username: string, password: string, role: string) {
	return { username, password, role };
}

const rows = [
	createData("admin", "admin", "ADMIN"),
	createData("khoapham", "khoapham", "USER"),
];

export const Account: FC = () => {
	return (
		<BasicLayout>
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
									"&:last-child td, &:last-child th":
										{
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
										<Tooltip title="edit">
											<IconButton
												aria-label="edit"
												color="warning"
											>
												<Edit />
											</IconButton>
										</Tooltip>
										<Tooltip title="detail">
											<IconButton
												aria-label="detail"
												color="primary"
											>
												<Info />
											</IconButton>
										</Tooltip>
										<Tooltip title="delete">
											<IconButton
												aria-label="delete"
												color="error"
											>
												<Delete />
											</IconButton>
										</Tooltip>
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</BasicLayout>
	);
};
