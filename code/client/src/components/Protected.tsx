import {FC, ReactNode} from "react";

import {observer} from "mobx-react-lite"
import { store } from "../stores";
import {Navigate} from "react-router-dom";

export const Protected: FC<{children: ReactNode}> = observer(({children}) => {
    return <>
        {store.isLoggedIn ? children : <Navigate to="/login" /> }
    </>;
})