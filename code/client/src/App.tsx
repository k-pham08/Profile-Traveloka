import { routerConfig } from "./router";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { isLoggedIn } from "./utils/constraint";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
	function isAuth(isPrivate: Boolean, element: any) {
		if (isLoggedIn || !isPrivate) return element;

		return <Redirect to="/login" />;
	}

	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<BrowserRouter>
					<Switch>
						{routerConfig.map(
							({
								path,
								component,
								isPrivate = false,
								exact = undefined,
							}) => (
								<Route
									path={path}
									component={isAuth(
										isPrivate,
										component
									)}
									exact={exact}
								/>
							)
						)}
					</Switch>
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
