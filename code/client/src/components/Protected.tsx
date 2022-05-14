import {FC, ReactNode, useEffect, useState} from "react";

import {observer} from "mobx-react-lite"
import { store } from "../stores";
import {Navigate} from "react-router-dom";

export const Protected: FC<{children: ReactNode}> = observer(({children}) => {
    const {isLoggedIn, isDone} = store;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        store.checkLogin();
    }, [])

    useEffect(() => {
        if(!isDone) return;
        setIsLoading(false);
    }, [isDone])


    return <>
        {isLoading ? <></> : (isDone && !isLoggedIn ? <Navigate to="/login" />  : children)}
    </>;
})