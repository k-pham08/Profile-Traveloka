import {AdsSlider, Search} from "../../components/user";
import {BasicLayout} from "../../layouts/BasicLayout";
import {useStore} from "../../stores";
import {UserRole} from "../../models/types";
import {observer} from "mobx-react-lite";

export const Home = observer(() => {
    const {role} = useStore();
    return (
        <BasicLayout>
            {role == UserRole.USER ? <>
                <AdsSlider></AdsSlider>
                <Search></Search>
            </> : <>
            </>}
        </BasicLayout>
    );
});
