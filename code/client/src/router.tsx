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
import { UserRegister } from "./pages/User/UserRegister";
import { PartnerRegister } from "./pages/PartnerRegister";
import { Register } from "./pages/Register";

// u can add new route in here
export const routerConfig = [
	{ path: "/", component: <Home /> },
	{ path: "/login", component: <Login /> },
	{ path: "/vouchers", component: <Voucher />, isPrivate: true },
	{ path: "/orders", component: <Order />, isPrivate: true },
	{ path: "/partnership", component: <Register /> },
	{ path: "/profile/:mode", component: <Profile />, isPrivate: true },
	{
		path: "/accounts",
		component: <Account />,
		isPrivate: true,
	},
	{
		path: "/accounts/:account/:mode",
		component: <Profile />,
		isPrivate: true,
	},
	{ path: "/home", component: <Home /> },
	{ path: "/signup", component: <Register /> },
	{ path: "*", component: <NotFound /> },
];

// u can add new item in menu here
export const menu = [
	{ name: "accounts", path: "/accounts" },
	{ name: "vouchers", path: "/vouchers" },
	{ name: "orders", path: "/orders" },
];
