import { routerConfig } from "./router";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { isLoggedIn } from "./utils/constraint";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	function isAuth(isPrivate: Boolean, element: any) {
		if (isLoggedIn || !isPrivate) return element;

		return <Navigate to="/login" />;
	}

	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<BrowserRouter>
					<Routes>
						{routerConfig.map(
							({
								path,
								component,
								isPrivate = false,
								exact = undefined,
							}) => (
								<Route
									key={path}
									path={path}
									element={isAuth(
										isPrivate,
										component
									)}
								/>
							)
						)}
					</Routes>
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
