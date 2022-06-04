import {FC} from "react";
import {observer} from "mobx-react-lite";
import {BasicLayout} from "../../layouts/BasicLayout";
import {ServiceTable} from "../../components/Service/ServiceTable";

export const Services: FC<{}> = observer(() => {
    return <BasicLayout>
        <ServiceTable />
    </BasicLayout>
})