import { FC, ReactNode } from "react";
import { Container } from "@mui/material";

import { Appbar } from "../components/appbar";

import "./BasicLayout.module.scss";

export const BasicLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<div className="App">
				<Appbar></Appbar>
			</div>
			<Container component="main" maxWidth="lg">
				{children}
			</Container>
		</>
	);
};
