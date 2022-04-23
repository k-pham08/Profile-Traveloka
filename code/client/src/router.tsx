<<<<<<< HEAD
=======
import { ReactNode } from "react";

>>>>>>> d3dfb8935b892b732fb8d2f258db3122272829ca
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

// u can add new route in here
export const routerConfig = [
	{ path: "/", component: Home, exact: true },
	{ path: "/login", component: Login },
	{ path: "/vouchers", component: Voucher, isPrivate: true },
	{ path: "/orders", component: Order, isPrivate: true },
	{
		path: "/accounts",
		component: Account,
		isPrivate: true,
		exact: true,
	},
	{
		path: "/accounts/:account",
		component: Profile,
		isPrivate: true,
	},
	{ path: "*", component: NotFound, exact: true },
];

// u can add new item in menu here
export const menu = [
	{ name: "accounts", path: "/accounts" },
	{ name: "vouchers", path: "/vouchers" },
	{ name: "orders", path: "/orders" },
];
