import {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {BasicLayout} from "../../layouts/BasicLayout";
import {useStore} from "../../stores";
import {services} from "../../utils/services";
import {Service} from "../../models/Service";

export const ServiceDetail: FC = observer(() => {
    const {sServiceDetail} = useStore();
    const {id} = useParams();
    const navigator = useNavigate();


    useEffect(() => {
        if (id) {
            Service.getById(id).then(([err, data]) => {

            })
        } else {
            navigator("/404");
        }
    }, []);

    return <BasicLayout>
        {id}
    </BasicLayout>
})