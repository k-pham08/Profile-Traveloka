import React from "react";
import UserNavbar from "../components/UserNavbar";
import Search from "../components/Search";
import AdsSlider from "../components/AdsSlider";

export default function UserHome() {
	return (
		<div>
			<UserNavbar></UserNavbar>
			<AdsSlider></AdsSlider>
			<Search></Search>
		</div>
	);
}
