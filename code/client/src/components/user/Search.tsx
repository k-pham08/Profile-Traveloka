import { SearchOption } from "./SearchOption";
import { SearchRentCar } from "./SearchRentCar";
import { Paper } from "@mui/material";
import { useState } from "react";
import { SearchFlight } from "./SearchFlight";
import { SearchHotel } from "./SearchHotel";
import { SearchCombo } from "./SearchCombo";
import { SearchShuttle } from "./SearchShuttle";

const renderOption = (key: string) => {
	switch (key) {
		case "FLIGHT":
			return <SearchFlight></SearchFlight>;
		case "HOTEL":
			return <SearchHotel></SearchHotel>;
		case "SAVING-COMBO":
			return <SearchCombo></SearchCombo>;
		case "AIRPORT-PICKLES":
			return <SearchShuttle></SearchShuttle>;
		case "CAR-RENTAL":
			return <SearchRentCar></SearchRentCar>;
		default:
			return <SearchFlight></SearchFlight>;
	}
};

export const Search = () => {
	const [option, setOption] = useState("");

	const parentCallback = (data: string) => {
		console.log(data);
		setOption(data);
	};
	return (
		<Paper
			elevation={12}
			sx={{
				display: "flex",
				maxWidth: "70%",
				margin: "auto",
				marginBottom: "2rem",
			}}
		>
			<SearchOption parentCallback={parentCallback}></SearchOption>
			{renderOption(option)}
		</Paper>
	);
};
