import {FC, useCallback, useEffect, useState} from "react";
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
import {FormControl, InputLabel, MenuList, OutlinedInput} from "@mui/material";
import {observer} from "mobx-react";
import {DropdownSetting} from "../../components/Settings";
import {USER_SETTINGS} from "../../utils/constraint";
import {theme} from "../../utils/theme";
import {ServicesChooseGroup} from "../../components/Service";
import {ChangePassword} from "../User/ChangePassword";
import { Paper } from "@material-ui/core";
import { padding } from "@mui/system";

export const Profile: FC = observer(() => {
    const {sProfile, role} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const [submitting, setSubmitting] = useState<boolean>(false);

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
    }, [mode, account]);

    const ChangeModeHandle = useCallback(() => {
        const href: string = (account ? `/accounts/${account}/` : "/profile/") + (sProfile.isView ? "edit" : "view");

        if (!sProfile.isView) {
            setSubmitting(true);
            sProfile.updateInfo().then(([err, data]) => {
                if (err) {
                    return enqueueSnackbar(err.message, {variant: "error"});
                }
                enqueueSnackbar(data.message, {variant: "success"});
                setSubmitting(false);
                navigator(href);
            });
        } else
            navigator(href);
    }, []);

    const ChangePasswordHandle = useCallback(() => {
        try {
            if (sProfile.isChangePassword) {
                setSubmitting(true);
                const {user, old_password, new_password, confirm_password} = sProfile;

                if (role != UserRole.ADMIN) {
                    if (!old_password)
                        throw new Error("Vui lòng điền mật khẩu cũ !");
                    if (!new_password)
                        throw new Error("Vui lòng điền mật khẩu mới !");
                    if (!confirm_password)
                        throw new Error("Vui lòng điền xác nhận mật khẩu !");

                    if (confirm_password != new_password)
                        throw new Error("Mật khẩu xác nhận không đúng !");
                }

                if (new_password.length < 8)
                    throw new Error("Mật khẩu ít nhất phải có 8 kí tự !")


                User.changePassword(user.userId, new_password, old_password).then(([err, data]) => {
                    if (!err)
                        sProfile.set_IsChangePassword(!sProfile.isChangePassword);
                    enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                    setSubmitting(false);
                }).catch((err) => {
                    enqueueSnackbar(err.message, {variant: "error"});
                    setSubmitting(false);
                })
            } else
                sProfile.set_IsChangePassword(!sProfile.isChangePassword);
        } catch (e: any) {
            enqueueSnackbar(e.message, {variant: "error"});
            setSubmitting(false);
        }
    }, [])

    const CancelChangePasswordHandle = useCallback(() => {
        sProfile.set_password("");
        sProfile.set_oldPassword("");
        sProfile.set_confirm("");
        sProfile.set_IsChangePassword(false);
    }, []);

    return (
        <BasicLayout>
            <Grid container spacing={2} direction="row">
                <Grid item xs={3} style={{width: "100%"}}>
                    {role === UserRole.USER ?
                        <MenuList dense>
                            <DropdownSetting menu={USER_SETTINGS} closeHandle={() => {
                            }}/>
                        </MenuList> : <UserOptionBar/>}
                </Grid>

                <Grid item xs={9}>
                    <Paper elevation={8} style={{padding: "2rem", marginBottom: "1rem"}}>
                        <UserInfo user={sProfile.user} setUser={sProfile.user} isView={sProfile.isView}/>
                        <Grid container mt={2}>
                            {sProfile.user.type == UserRole.PARTNER &&
                                <>
                                    <FormControl fullWidth disabled={sProfile.isView}>
                                        <InputLabel htmlFor="outlined-adornment">
                                            Tên Doanh Nghiệp
                                        </InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment"
                                            value={sProfile.user.companyName}
                                            onChange={(event) => {
                                                sProfile.user.companyName = event.target.value;
                                            }}
                                            label="Tên Doanh Nghiệp"
                                            name="name"
                                            required
                                        />
                                    </FormControl>
                                    <ServicesChooseGroup store={sProfile} isView={sProfile.isView}/>
                                </>}
                        </Grid>
                    {sProfile.isChangePassword && <ChangePassword/>}

                    <Grid container spacing={1} direction="row" justifyContent="flex-end">

                        {sProfile.isChangePassword && <Grid item>
                            <Button variant="outlined" color="error" onClick={CancelChangePasswordHandle}>Cancel</Button>
                        </Grid>}

                        {sProfile.isView &&
                            <Grid item>
                                <Button disabled={submitting} variant="contained"
                                        color={sProfile.isChangePassword ? "success" : "primary"}
                                        onClick={ChangePasswordHandle}>
                                    {sProfile.isChangePassword ? "Lưu" : "Đổi Mật Khẩu"}
                                </Button>
                            </Grid>}

                        <Grid item>
                            <Button disabled={submitting} variant="contained"
                                    color={sProfile.isView ? "primary" : "success"}
                                    onClick={ChangeModeHandle}>
                                {sProfile.isView ? "Chỉnh sửa" : "Lưu"}
                            </Button>
                        </Grid>
                    </Grid>
                    </Paper>
                    <UserReward/>
                    <UserOrderHistory/>
                </Grid>
            </Grid>
        </BasicLayout>
    );
});
