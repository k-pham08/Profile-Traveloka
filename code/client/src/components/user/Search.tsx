import { FC, useCallback, useState } from "react";
import { SearchOption } from "./SearchOption";
import {
	SearchRentCar,
	SearchCombo,
	SearchFlight,
	SearchHotel,
	SearchShuttle,
} from "./";
import { Paper } from "@mui/material";

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

export const Search: FC<{}> = () => {
	const [option, setOption] = useState("");
	const callback = useCallback((option: string) => {
		setOption(option);
	}, []);
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
			<SearchOption parentCallback={callback}></SearchOption>
			{renderOption(option)}
		</Paper>
	);
};
