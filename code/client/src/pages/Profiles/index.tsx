import {FC, useCallback, useEffect, useState} from "react";
import {Button, Grid} from "@mui/material/";

import { useNavigate, useParams } from "react-router-dom";

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
import {ServicesChooseGroup} from "../../components/Service";

export const Profile: FC = observer(() => {
    const {sProfile, role} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const [submitting, setSubmitting] = useState<boolean>(false);

	const { account, mode } = useParams();

	useEffect(() => {
		if (mode) {
			sProfile.set_IsView(mode == MODE.VIEW);
			if (typeof account == "string") {
				User.getUserById(account).then(([err, data]) => {
					if (err) {
						enqueueSnackbar(err.message, {
							variant: "error",
						});
						return;
					}
					sProfile.set_user(data);
				});
			} else {
				User.getMe().then(([err, data]) => {
					if (err) {
						enqueueSnackbar(err.message, {
							variant: "error",
						});
						return;
					}
					sProfile.set_user(data);
				});
			}
		} else {
			navigator("/404");
		}
	}, [mode, account]);

    const ChangeMode = useCallback(() => {
        const href: string = (account ? `/accounts/${account}/` : "/profile/") + (sProfile.isView ? "edit" : "view");

        console.log(mode)
        if (!sProfile.isView) {
            sProfile.updateInfo().then(([err, data]) => {
                if (err) {
                    return enqueueSnackbar(err.message, {variant: "error"});
                }
                enqueueSnackbar(data.message, {variant: "success"})
                navigator(href);
            });
        } else
            navigator(href);

    }, []);

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
                    <UserInfo user={sProfile.user} setUser={sProfile.user} isView={sProfile.isView}/>
                    <Grid container mt={2}>
                        {sProfile.user.type == UserRole.PARTNER &&
                            <ServicesChooseGroup store={sProfile} isView={sProfile.isView}/>}
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-end" style={{margin: theme.spacing(1)}}>
                        <Button variant="contained" color={sProfile.isView ? "primary" : "success"}
                                onClick={ChangeMode}>
                            {sProfile.isView ? "Chỉnh sửa" : "Lưu"}
                        </Button>
                    </Grid>
                    <UserReward/>
                    <UserOrderHistory/>
                </Grid>
            </Grid>
        </BasicLayout>
    );
});