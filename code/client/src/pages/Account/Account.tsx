import {FC, useEffect, useState} from "react";

import {BasicLayout} from "../../layouts/BasicLayout";
import {observer} from "mobx-react-lite";
import {User} from "../../models/User";
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

    return <BasicLayout>
        <UserTable list={sAccount.users} reloadList={loadList}/>
    </BasicLayout>
});
