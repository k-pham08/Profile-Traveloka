import {routerConfig} from "./router";
import {SnackbarProvider} from "notistack";
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/theme";

import {observer, Provider} from "mobx-react";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {store, StoreContext} from "./stores";
import {FC, useEffect} from "react";
import {Protected} from "./components/Protected";

export const App: FC<{}> = () => {
    function isAuth(isPrivate: Boolean, element: any) {
        if (!isPrivate)
            return element;
        return <Protected>
            {element}
        </Protected>
    }

    useEffect(() => {
        store.checkLogin();
    })


    return (
        <ThemeProvider theme={theme}>
            <StoreContext.Provider value={store}>
                <Provider store={store}>
                    <SnackbarProvider maxSnack={3}>
                        <BrowserRouter>
                            <Routes>
                                {routerConfig.map(
                                    ({
                                         path,
                                         component,
                                         isPrivate = false,
                                         exact = undefined,
                                     }) => (
                                        <Route
                                            key={path}
                                            path={path}
                                            element={isAuth(
                                                isPrivate,
                                                component
                                            )}
                                        />
                                    )
                                )}
                            </Routes>
                        </BrowserRouter>
                    </SnackbarProvider>
                </Provider>
            </StoreContext.Provider>
        </ThemeProvider>
    );
}
