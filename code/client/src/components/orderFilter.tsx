import { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Container, FormControl, Button, TextField } from "@mui/material";

export const OrderFilter = () => {
	const [start, setStart] = useState<Date | null>(new Date());

	const [end, setEnd] = useState<Date | null>(new Date());

	const handleStartChange = (newValue: Date | null) => {
		setStart(newValue);
	};

	const handleEndChange = (newValue: Date | null) => {
		setEnd(newValue);
	};

	return (
		<Container sx={{ display: "flex", flexWrap: "wrap", mb: 2, mt: 2 }}>
			<span style={{ margin: "1rem" }}>From</span>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Date desktop"
						inputFormat="MM/dd/yyyy"
						value={start}
						onChange={handleStartChange}
						renderInput={(params) => (
							<TextField {...params} />
						)}
					/>
				</LocalizationProvider>
			</FormControl>
			<span style={{ margin: "1rem" }}>to</span>
			<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Date desktop"
						inputFormat="MM/dd/yyyy"
						value={end}
						onChange={handleEndChange}
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
};
