import React from "react";
import SearchOption from "./SearchOption";
import SearchFlight from "./SearchFlight";
import SearchHotel from "./SearchHotel";
import SearchCombo from "./SearchCombo";
import SearchShuttle from "./SearchShuttle";
import SearchRentCar from "./SearchRentCar";
import { Paper } from "@mui/material";
export default function Search() {
	return (
		<Paper
			elevation={12}
			sx={{
				display: "flex",
				maxWidth: "60%",
				margin: "auto",
				marginBottom: "2rem",
				maxHeight: "50%",
			}}
		>
			<SearchOption></SearchOption>
			<SearchRentCar></SearchRentCar>
		</Paper>
	);
}
