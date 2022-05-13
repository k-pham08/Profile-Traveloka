import {FC, useEffect, useState} from "react";
import { BasicLayout } from "../layouts/BasicLayout";
import {store} from "../stores";

export const Voucher: FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(store.isLoggedIn);
	useEffect(() => {
		setIsLoggedIn(store.isLoggedIn);
	}, [store.isLoggedIn])

	return (
		<BasicLayout>
			<div>Voucher</div>
		</BasicLayout>
	);
};
