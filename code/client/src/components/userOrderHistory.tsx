import { Paper } from "@mui/material";
import React from "react";
import { OrderFilter } from "./orderFilter";
import { OrderResult } from "./orderResult";

export const UserOrderHistory = () => {
	return (
		<Paper sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
			<h2 style={{ margin: "1rem" }}>Order History</h2>
			<OrderFilter />
			<OrderResult />
		</Paper>
	);
};
