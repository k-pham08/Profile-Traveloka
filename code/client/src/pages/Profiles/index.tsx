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
import {Order} from "../../models/Order";
import { Voucher } from "../../models/Voucher";
import { MyVoucher } from "../User/MyVoucher";

export const Profile: FC = observer(() => {
    const {sProfile, role} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const [submitting, setSubmitting] = useState<boolean>(false);

    const {account, mode} = useParams();

    useEffect(() => {
        if (mode) {
            sProfile.set_IsView(mode === MODE.VIEW);

            (typeof account == "string" ? User.getUserById(account) : User.getMe()).then(([err, data]) => {
                if (err) {
                    enqueueSnackbar(err.message, {variant: "error"});
                    return;
                }
                sProfile.set_user(data);

                sProfile.set_orders([]);
                Voucher.getMyVoucher(`${sProfile.user.userId}`, 'used').then((res) => {
                    sProfile.set_usedvouchers(res.data.vouchers);
                })
                Voucher.getMyVoucher(`${sProfile.user.userId}`, 'available').then((res) => {
                    sProfile.set_availblevouchers(res.data.vouchers);
                })
                Voucher.getMyVoucher(`${sProfile.user.userId}`, 'expired').then((res) => {
                    sProfile.set_expiredvouchers(res.data.vouchers);
                })
                if (sProfile.user.type != UserRole.ADMIN)
                    (typeof account == "string" ? Order.getByAccount(account) : Order.getOfMe()).then(([err, data]) => {
                        if (err) {
                            enqueueSnackbar(err.message, {variant: "error"})
                            return;
                        }
                        sProfile.set_orders(data);
                    })

            });
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

                if (role !== UserRole.ADMIN) {
                    if (!old_password)
                        throw new Error("Vui l??ng ??i???n m???t kh???u c?? !");
                    if (!new_password)
                        throw new Error("Vui l??ng ??i???n m???t kh???u m???i !");
                    if (!confirm_password)
                        throw new Error("Vui l??ng ??i???n x??c nh???n m???t kh???u !");

                    if (confirm_password != new_password)
                        throw new Error("M???t kh???u x??c nh???n kh??ng ????ng !");
                }

                if (new_password.length < 8)
                    throw new Error("M???t kh???u ??t nh???t ph???i c?? 8 k?? t??? !")


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
                <Grid item xs md xl={2} style={{width: "100%"}}>
                    {role == UserRole.USER ?
                        <MenuList dense>
                            <DropdownSetting menu={USER_SETTINGS} closeHandle={() => {
                            }}/>
                        </MenuList> : <UserOptionBar/>}
                </Grid>

                <Grid item xs={12} md={8}>
                    <UserInfo user={sProfile.user} setUser={sProfile.user} isView={sProfile.isView}/>
                    <Grid container mt={2}>
                        {sProfile.user.type == UserRole.PARTNER &&
                            <>
                                <FormControl fullWidth disabled={sProfile.isView}>
                                    <InputLabel htmlFor="outlined-adornment">
                                        T??n Doanh Nghi???p
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment"
                                        value={sProfile.user.companyName}
                                        onChange={(event) => {
                                            sProfile.user.companyName = event.target.value;
                                        }}
                                        label="T??n Doanh Nghi???p"
                                        name="name"
                                        required
                                    />
                                </FormControl>
                                <ServicesChooseGroup store={sProfile} isView={sProfile.isView}/>
                            </>}
                    </Grid>

                    {sProfile.isChangePassword && <ChangePassword/>}

                    <Grid container spacing={1} direction="row" justifyContent="flex-end"
                          style={{margin: theme.spacing(1)}}>

                        {sProfile.isChangePassword && <Grid item>
                            <Button variant="outlined" color="error"
                                    onClick={CancelChangePasswordHandle}>Cancel</Button>
                        </Grid>}

                        {sProfile.isView &&
                            <Grid item>
                                <Button disabled={submitting} variant="contained"
                                        color={sProfile.isChangePassword ? "success" : "primary"}
                                        onClick={ChangePasswordHandle}>
                                    {sProfile.isChangePassword ? "L??u" : "?????i M???t Kh???u"}
                                </Button>
                            </Grid>}

                        <Grid item>
                            <Button disabled={submitting} variant="contained"
                                    color={sProfile.isView ? "primary" : "success"}
                                    onClick={ChangeModeHandle}
                                    sx={{mb: 1}}>
                                {sProfile.isView ? "Ch???nh s???a" : "L??u"}
                            </Button>
                        </Grid>
                    </Grid>
                    {sProfile.user.type === UserRole.USER && <div><UserReward reward={sProfile.user.reward}/><MyVoucher usedVoucher={sProfile.UsedVouchers} 
                                                                                                                        availVouchers={sProfile.AvailableVouchers}
                                                                                                                        expiredVouchers={sProfile.ExpiredVouchers}/></div>}
                    {sProfile.user.type !== UserRole.ADMIN &&
                        <UserOrderHistory displayType={sProfile.user.type} orders={sProfile.orders}/>}
                </Grid>
            </Grid>
        </BasicLayout>
    );
});
