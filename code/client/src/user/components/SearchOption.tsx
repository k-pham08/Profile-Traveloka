import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";

export default function SearchOption() {
	const services = [
		"Vé máy bay",
		"Khách sạn",
		"Combo tiết kiệm",
		"Đưa đón sân bay",
		"Cho thuê xe",
	];

	const serIcons = [
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/14570d0f2b738b8dc8ef903949bce73c.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a55648c68713fc122a36183be900970c.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d5986586ed5208e79da32e193ee6114e.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c73be2b5ed63788de517755b48545c7b.svg",
		"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c21a03d3f725df0655ff334d38e0b0fd.svg",
	];
	return (
		<Paper
			sx={{
				width: "30%",
				bgcolor: "background.paper",
				background: "rgba(242,243,243,1.00)",
			}}
		>
			<nav aria-label="main mailbox folders">
				<List>
					{services.map((service, index) => (
						<ListItem button key={service}>
							<ListItemIcon>
								<img
									src={serIcons[index]}
									alt="Service Icon"
								></img>
							</ListItemIcon>
							<ListItemText primary={service} />
						</ListItem>
					))}
				</List>
			</nav>
		</Paper>
	);
}
