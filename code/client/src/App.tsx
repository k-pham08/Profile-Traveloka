import {routerConfig} from "./router";
import {SnackbarProvider} from "notistack";
import {ThemeProvider} from "@mui/material";
import {theme} from "./utils/theme";

import {Provider} from "mobx-react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {store, StoreContext} from "./stores";
import {FC, useEffect} from "react";
import {Protected} from "./components/Protected";
import {Service} from "./models/Service";

export const App: FC = () => {

    function isAuth(isPrivate: Boolean, element: any, isAdmin: Boolean) {
        if (!isPrivate)
            return element;
        return <Protected isAdmin={isAdmin}>
            {element}
        </Protected>
    }

    useEffect(() => {
        store.checkLogin();
        Service.getAll().then(([err, data]) => {
            if (!err) {
                store.set_services(data);
                return;
            }
            window.alert(err.message);
        });
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
                                         isAdmin = false
                                     }) => (
                                        <Route
                                            key={path}
                                            path={path}
                                            element={isAuth(
                                                isPrivate,
                                                component,
                                                isAdmin
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
