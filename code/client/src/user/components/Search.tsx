import React from "react";
import SearchOption from "./SearchOption";
import SearchForm from "./SearchForm";
import { Paper } from "@mui/material";
export default function Search() {
	return (
		<Paper
			sx={{
				display: "flex",
				maxWidth: "60%",
				margin: "auto",
			}}
		>
			<SearchOption></SearchOption>
			<SearchForm></SearchForm>
		</Paper>
	);
}
