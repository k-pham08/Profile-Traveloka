import {FC, useEffect} from "react";

import {BasicLayout} from "../../layouts/BasicLayout";
import {observer} from "mobx-react-lite";
import {useSnackbar} from "notistack";
import {UserTable} from "../../components/Admin/UserTable";
import {useStore} from "../../stores";


export const Account: FC<{}> = observer(({}) => {
    const {sAccount} = useStore();
    const {enqueueSnackbar} = useSnackbar();

    const loadList = () => {
        sAccount.reloadList().then(([err, data]) => {
            if (err) {
                return enqueueSnackbar(err.message, {variant: "error"});
            }
            sAccount.set_users(data);
        });
    }

    useEffect(() => {
        loadList();
    }, []);

    useEffect(() => {
        console.log(sAccount.users[0])
    }, [sAccount.users])

    return <BasicLayout>
        <UserTable list={sAccount.users} reloadList={loadList} setList={sAccount.set_users}/>
    </BasicLayout>
});