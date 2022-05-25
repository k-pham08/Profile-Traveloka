import {FC, useEffect, useState} from "react";

import {BasicLayout} from "../../layouts/BasicLayout";
import {observer} from "mobx-react-lite";
import {User} from "../../models/User";
import {useSnackbar} from "notistack";
import {UserTable} from "../../components/Admin/UserTable";


export const Account: FC<{}> = observer(({}) => {
    const {enqueueSnackbar} = useSnackbar();
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        User.getAllUser().then(([err, data]) => {
            if (err) {
                enqueueSnackbar(err.message, {variant: "error"});
                return;
            }
            setUsers(data);
        });
    }, []);

    return <BasicLayout>
        <UserTable list={users}  setList={setUsers}/>
    </BasicLayout>
});
