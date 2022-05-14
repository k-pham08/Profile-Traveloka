import {FC, ReactNode, useEffect, useLayoutEffect, useState} from "react";
import {Container} from "@mui/material";

import {Appbar} from "../components/appbar";
import {UserNavbar} from "../components/user";

import "./BasicLayout.module.scss";
import {store, useStore} from "../stores";
import {UserRole} from "../models/types";
import {observer} from "mobx-react";

export const BasicLayout: FC<{ children: ReactNode }> = observer(({children}) => {
    const {role} = useStore()

    return (
        <>
            <div className="App">
                {store.isLoggedIn && role != UserRole.USER ? <Appbar/> : <UserNavbar/> }
            </div>
            <Container component="main" maxWidth="lg">
                {children}
            </Container>
        </>
    );
});
