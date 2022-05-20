import {store} from "../stores";
import {MenuItem, MenuLink} from "../models/types";

export const srcIcon = "./favicon.ico";

export const PRIMARY_COLOR = "#1976d2"

export const APP_NAME = "Traveloka";

export const ADVERTISEMENTS = [
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/05/1649154913787-703cafe0bf9fed04d9937ba931cf5866.jpeg?tr=h-230,q-75,w-472",
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650452762625-64e60040df800d64883810d8418bf55f.png?tr=h-230,q-75,w-472",
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650419216415-bbacd77365861c070e21903a924646c2.jpeg?tr=h-230,q-75,w-472",
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/20/1650452397612-fa7bad123bb9e7b59477e09af81eaee6.png?tr=h-230,q-75,w-472",
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-230,q-75,w-472",
    "https://ik.imagekit.io/tvlk/image/imageResource/2022/04/07/1649315686206-427fdc6225748d594d5b914dfa7d0cad.jpeg?tr=h-230,q-75,w-472",
];

export const SERVICE_ICON = [
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/14570d0f2b738b8dc8ef903949bce73c.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a55648c68713fc122a36183be900970c.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d5986586ed5208e79da32e193ee6114e.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c73be2b5ed63788de517755b48545c7b.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c21a03d3f725df0655ff334d38e0b0fd.svg",
];

export const SERVICES = [
    "Vé máy bay",
    "Khách sạn",
    "Combo tiết kiệm",
    "Đưa đón sân bay",
    "Cho thuê xe",
];

export const ADMIN_SETTINGS: MenuItem[] = [{title: "Profile"}, {title: "Account"}, {title: "Dashboard"}, {
    title: "Logout",
    handle: store.Logout
}];

export const USER_SETTINGS: MenuItem[] = [
    {title: "Chỉnh sửa hồ sơ"},
    {title: "Điểm thưởng của tôi"},
    {title: "Thẻ của tôi"},
    {title: "Danh sách giao dịch"},
    {title: "Đặt chỗ của tôi"},
    {title: "Thông báo giá vé máy bay"},
    {title: "Khuyến mãi"},
    {title: "Đăng xuất", handle: store.Logout},
];

export const MENU_ICONS = [
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e092465666a2dfe398407794a893cbcc.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/468b3a08ab94b440b4e09fb9130eee1e.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0965a06a63e873adb97d5ed7d7b92dbe.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/70100d4a2047ac955124953dbc3351db.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cef9778118bdd85e1062cdd0b6196362.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg",
];

export const DRAWER_ITEMS: MenuLink[] = [
    {title: "Trang chủ", link: "/"},
    {title: "Hợp tác với chúng tôi", link: "/partnership"},
    {title: "Đã Lưu"},
    {title: "Đặt chỗ của tôi"},
];

export const DRAWER_ICONS = [
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/455eab646e53732d81380eabadf10b47.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg",
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg",
];

export const LOGO_TRAVELOKA =
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg";
