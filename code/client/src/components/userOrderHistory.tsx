import { Paper } from "@mui/material";
import React from "react";
import { OrderFilter } from "./orderFilter";
import { OrderResult } from "./orderResult";

export const UserOrderHistory = () => {
	return (
		<Paper elevation={8} sx={{ display: "flex", flexWrap: "wrap", mt: 2, mb: 2 }}>
			<h2 style={{ margin: "1rem" }}>Lịch sử giao dịch</h2>
			<OrderResult />
		</Paper>
	);
};
