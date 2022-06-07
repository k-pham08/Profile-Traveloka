import { FC } from "react";
import { OrderTable } from "../../components/Order/OrderTable";
import { BasicLayout } from "../../layouts/BasicLayout";

export const Order: FC = () => {
	return <BasicLayout>
		<OrderTable/>
	</BasicLayout>;
};
