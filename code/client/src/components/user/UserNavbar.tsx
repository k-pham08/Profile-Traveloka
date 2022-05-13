import {useState, MouseEvent, FC, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {UserDrawer} from "../../components/user";
import {
    USER_SETTINGS,
    MENU_ICONS,
    LOGO_TRAVELOKA,
    DRAWER_ITEMS,
    DRAWER_ICONS,
} from "../../utils/constraint";
import {store} from "../../stores";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {UserSetting} from "../Settings/UserSetting";

const pages = DRAWER_ITEMS.slice(1);
const icons = DRAWER_ICONS.slice(1);

export const UserNavbar: FC<{}> = observer(() => {
    const [isLoggedIn, setIsLoggedIn] = useState(store.isLoggedIn);


    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="inherit">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {isLoggedIn && <UserDrawer></UserDrawer>}

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                        }}
                    >
                        <img src={LOGO_TRAVELOKA} alt="Logo"/>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "flex", md: "none"},
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: "block",
                                    md: "none",
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: {xs: "flex", md: "none"},
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            justifyContent: "end",
                        }}
                    >
                        {pages.map((page, index) => (
                            <ListItem
                                button
                                key={page}
                                sx={{
                                    width: "fit-content",
                                }}
                            >
                                <ListItemIcon sx={{minWidth: "2rem"}}>
                                    <img
                                        src={icons[index]}
                                        alt="Menu Icon"
                                    ></img>
                                </ListItemIcon>
                                <ListItemText primary={page}/>
                            </ListItem>
                        ))}
                    </Box>
                    {isLoggedIn ? <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p: 0}}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <UserSetting closeHandle={handleCloseUserMenu}/>
                        </Menu>
                    </Box> : <>
                        <Link to="/Login">Login</Link>
                        <Typography sx={{m: 1}}>/</Typography>
                        <Link to="/register">Sign Up</Link>
                    </>}
                </Toolbar>
            </Container>
        </AppBar>
    );
});
