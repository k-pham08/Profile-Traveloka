import { createContext, useContext, Context } from "react";
import { Store } from "./Store";

import {makeObservable} from "mobx";

export const store = makeObservable(new Store());



export const StoreContext = createContext(store);

// import { setBaseStoreContext } from "./useBaseStore";
// setBaseStoreContext(storeContext as Context<any>);

export function useStore() {
	return useContext(StoreContext);
}

// @ts-ignore
window.store = store;
