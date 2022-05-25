import {FC, useEffect} from "react";
import {Button, Grid} from "@mui/material/";

import {useNavigate, useParams} from "react-router-dom";

import {UserInfo, UserReward} from "../../components/user";
import {UserOrderHistory} from "../../components/userOrderHistory";
import {BasicLayout} from "../../layouts/BasicLayout";
import {UserOptionBar} from "../../components/Settings/UserOptionBar";
import {useSnackbar} from "notistack";
import {User} from "../../models/User";
import {useStore} from "../../stores";
import {MODE, UserRole} from "../../models/types";
import {MenuList, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {DropdownSetting} from "../../components/Settings";
import {USER_SETTINGS} from "../../utils/constraint";
import {theme} from "../../utils/theme";

export const Profile: FC = observer(() => {
    const {sProfile, role} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();

    const {account, mode} = useParams();

    useEffect(() => {
        if (mode) {
            sProfile.set_IsView(mode == MODE.VIEW);
            if (typeof account == "string") {
                User.getUserById(account).then(([err, data]) => {
                    if (err) {
                        enqueueSnackbar(err.message, {variant: "error"});
                        return;
                    }
                    sProfile.set_user(data);
                })
            } else {
                User.getMe().then(([err, data]) => {
                    if (err) {
                        enqueueSnackbar(err.message, {variant: "error"});
                        return;
                    }
                    sProfile.set_user(data);
                })
            }

        } else {
            navigator("/404");
        }
    }, [])

    useEffect(() => {}, [sProfile.user])

    console.log(sProfile.user)

    return (
        <BasicLayout>
            <Grid container spacing={2} direction="row">
                <Grid item md={3} style={{width: "100%"}}>
                    {role == UserRole.USER ?
                        <MenuList dense>
                            <DropdownSetting menu={USER_SETTINGS} closeHandle={() => {
                            }}/>
                        </MenuList> : <UserOptionBar/>}
                </Grid>
                <Grid item md>
                    <UserInfo user={sProfile.user} setUser={sProfile.get_user()} isView={sProfile.isView}/>
                    <Grid container direction="row" justifyContent="flex-end" style={{margin: theme.spacing(1)}}>
                        {sProfile.isView && <Button variant="contained" color="primary">
                                <Typography>Chỉnh sửa</Typography>
                        </Button>}
                    </Grid>
                    <UserReward/>
                    <UserOrderHistory/>
                </Grid>
            </Grid>
        </BasicLayout>
    );
});
