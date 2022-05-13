// import page
import {
	Login,
	Account,
	Voucher,
	NotFound,
	Profile,
	Home,
	Order,
	CreateAccount,
	CreateCompany,
} from "./pages";
import { UserHome } from "./pages/User/UserHome";
import { UserProfile } from "./pages/User/UserProfile";
import { UserRegister } from "./pages/User/UserRegister";

// u can add new route in here
export const routerConfig = [
	{ path: "/", component: <Home /> },
	{ path: "/login", component: <Login /> },
	{ path: "/vouchers", component: <Voucher />, isPrivate: true },
	{ path: "/orders", component: <Order />, isPrivate: true },
	{
		path: "/accounts",
		component: <Account />,
		isPrivate: true,
		exact: true,
	},
	{
		path: "/accounts/:account",
		component: <Profile />,
		isPrivate: true,
	},
	{ path: "/home", component: <UserHome /> },
	{ path: "/user-profile", component: <UserProfile /> },
	{ path: "/register/customer", component: <UserRegister /> },
	{ path: "*", component: <NotFound />, exact: true },
];

// u can add new item in menu here
export const menu = [
	{ name: "accounts", path: "/accounts" },
	{ name: "vouchers", path: "/vouchers" },
	{ name: "orders", path: "/orders" },
];
