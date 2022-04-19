import { Paper } from "@mui/material";
import React from "react";

import OrderFillter from "./orderFilter";
import OrderResult from "./orderResult";
export default function userOrderHistory() {
	return (
		<Paper sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
			<h2 style={{ margin: "1rem" }}>Order History</h2>
			<OrderFillter />
			<OrderResult />
		</Paper>
	);
}