import {
	Button,
	Paper,
	TableRow,
	TableContainer,
	TableCell,
	tableCellClasses,
	TableBody,
	Table,
	TableHead,
	styled,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: string
) {
	return { name, calories, fat, carbs };
}

const rows = [
	createData("12/12/2020", 159, 100000000, "Paid"),
	createData("12/12/2020", 262, 100000000, "Paid"),
	createData("12/12/2020", 237, 100000000, "Unpaid"),
	createData("12/12/2020", 305, 100000000, "Paid"),
	createData("12/12/2020", 356, 100000000, "Unpaid"),
];

export const OrderResult = () => {
	return (
		<TableContainer component={Paper} sx={{ m: 2 }}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Order Date</StyledTableCell>
						<StyledTableCell align="right">
							Guess Number
						</StyledTableCell>
						<StyledTableCell align="right">
							Total
						</StyledTableCell>
						<StyledTableCell align="right">
							Status
						</StyledTableCell>
						<StyledTableCell align="right"></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.calories}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.fat}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.carbs}
							</StyledTableCell>
							<StyledTableCell align="right">
								<Button variant="outlined">
									Detail
								</Button>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
