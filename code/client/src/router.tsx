import { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";

// import page
import {
	Login,
	Account,
	Voucher,
	NotFound,
	Profile,
	Home,
	Order,
} from "./pages";

export const routerConfig: Array<{
	path: string;
	element: ReactNode;
	allowAnonymous?: Boolean;
}> = [
	{ path: "/", element: <Home />, allowAnonymous: true },
	{ path: "/login", element: <Login />, allowAnonymous: true },
	{ path: "/vouchers", element: <Voucher /> },
	{ path: "/orders", element: <Order /> },
	{ path: "*", element: <NotFound />, allowAnonymous: true },
	{ path: "/accounts", element: <Account /> },
	{ path: "/accounts/:account", element: <Profile /> },
];

export const menu = [
	{ name: "accounts", path: "/accounts" },
	{ name: "vouchers", path: "/vouchers" },
	{ name: "orders", path: "/orders" },
];