import { FC } from "react";
import { DetailTable } from "../../components/Order/DetailTable";
import { BasicLayout } from "../../layouts/BasicLayout";

export const OrderDetail: FC = () => {
    return <BasicLayout>
        <DetailTable/>
    </BasicLayout>
}