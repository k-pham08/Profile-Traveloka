import React from "react";
import Appbar from "./components/appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./pages/account";
import Detail from "./pages/detail";
import Voucher from "./pages/voucher";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Appbar></Appbar>
				{/* <Account></Account> */}
			</div>

			<Routes>
				<Route path="/account" element={<Account />} />
				<Route path="/voucher" element={<Voucher />} />
				<Route path="/detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
