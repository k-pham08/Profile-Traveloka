import { SearchOption } from "./SearchOption";
import { SearchRentCar } from "./SearchRentCar";
import { Paper } from "@mui/material";
export const Search = () => {
	return (
		<Paper
			elevation={12}
			sx={{
				display: "flex",
				maxWidth: "70%",
				margin: "auto",
				marginBottom: "2rem",
				maxHeight: "50%",
			}}
		>
			<SearchOption></SearchOption>
			<SearchRentCar></SearchRentCar>
		</Paper>
	);
};
