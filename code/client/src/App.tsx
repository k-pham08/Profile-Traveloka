import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routerConfig } from "./router";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<BrowserRouter>
					<Routes>
						{routerConfig.map(({ path, element }) => (
							<Route path={path} element={element} />
						))}
					</Routes>
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
