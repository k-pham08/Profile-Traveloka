import { createTheme } from "@mui/material";

export const theme = createTheme({
	components: {
		MuiPaper: {
			styleOverrides: {
				// root: {
				// 	padding: "1rem",
				// },
			},
		},
	},
});
