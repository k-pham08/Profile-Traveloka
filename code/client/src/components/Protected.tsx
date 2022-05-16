import {FC, FunctionComponent, memo, ReactElement, ReactNode, useCallback, useEffect, useState} from "react";

import {observer} from "mobx-react-lite"
import {store} from "../stores";
import {Navigate} from "react-router-dom";
import {BasicLayout} from "../layouts/BasicLayout";
import {Loading} from "./Loading";
import {Checkbox} from "@mui/material";

export const Protected: FC<{ children: ReactElement }> = observer(({children}) => {
    const {isLoggedIn, isDone} = store;

   useEffect(() => {
       store.checkLogin();
   }, [])

    return <>
        {!isDone ? <Loading/> : (!isLoggedIn ?
            <Navigate to="/login"/> : children)}
    </>;
})