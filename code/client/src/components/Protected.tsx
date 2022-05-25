import {FC, ReactElement, useEffect} from "react";

import {observer} from "mobx-react-lite"
import {store} from "../stores";
import {Navigate} from "react-router-dom";
import {Loading} from "./Loading";

export const Protected: FC<{ children: ReactElement }> = observer(({children}) => {
    const {isLoggedIn, isDone, isLoading} = store;

    useEffect(() => {
        store.checkLogin();
    }, []);

    return <>
        {isLoading || !isDone ? <Loading/> : (!isLoggedIn ?
            <Navigate to="/login"/> : children)}
    </>;
})