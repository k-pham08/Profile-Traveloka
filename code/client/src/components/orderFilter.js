import * as React from "react";
import Button from "@mui/material/Button";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Container, FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

export default function orderFilter() {
	return (
		<Container sx={{ display: "flex", flexWrap: "wrap", mb: 2, mt: 2 }}>
			<span style={{ margin: "1rem" }}>From</span>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label="Date start"
						renderInput={(params) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<span style={{ margin: "1rem" }}>to</span>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label="Date end"
						renderInput={(params) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<Button variant="contained" sx={{ m: 2 }}>
				Search
			</Button>
		</Container>
	);
}
