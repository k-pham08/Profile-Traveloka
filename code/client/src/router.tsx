import { ReactNode } from "react";

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
import UserHome from "./user/pages/UserHome";
import UserProfile from "./user/pages/UserProfile";
import UserRegister from "./user/pages/UserRegister";

export const routerConfig: Array<{
	path: string;
	element: ReactNode;
	allowAnonymous?: Boolean;
}> = [
	{ path: "/", element: <Home />, allowAnonymous: true },
	{ path: "/login", element: <Login />, allowAnonymous: true },
	{ path: "/register/customer", element: <UserRegister /> },
	{ path: "/vouchers", element: <Voucher /> },
	{ path: "/orders", element: <Order /> },
	{ path: "*", element: <NotFound />, allowAnonymous: true },
	{ path: "/accounts", element: <Account /> },
	{ path: "/accounts/:account", element: <Profile /> },
	{ path: "/home", element: <UserHome /> },
	{ path: "/user/account", element: <UserProfile /> },
];

export const menu = [
	{ name: "accounts", path: "/accounts" },
	{ name: "vouchers", path: "/vouchers" },
	{ name: "orders", path: "/orders" },
];
