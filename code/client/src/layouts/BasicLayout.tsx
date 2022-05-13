import {FC, ReactNode, useEffect, useLayoutEffect, useState} from "react";
import {Container} from "@mui/material";

import {Appbar} from "../components/appbar";
import {UserNavbar} from "../components/user";

import "./BasicLayout.module.scss";
import {store, useStore} from "../stores";
import {UserRole} from "../models/types";
import {observer} from "mobx-react-lite";
import {autorun} from "mobx";

export const BasicLayout: FC<{ children: ReactNode }> = observer(({children}) => {
    // console.log(store.isLoggedIn, store.role)

    useEffect(() => {
        console.log(store.isLoggedIn, store.role, store.role != UserRole.USER)
    }, [store.role, store.isLoggedIn]);

    return (
        <>
            <div className="App">
                {store.isLoggedIn && store.role != UserRole.USER ? <Appbar/> : <UserNavbar/> }
            </div>
            <Container component="main" maxWidth="lg">
                {children}
            </Container>
        </>
    );
});
