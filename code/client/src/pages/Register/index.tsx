import {FC, useEffect, useState} from "react";
import {BasicLayout} from "../../layouts/BasicLayout";
import {UserInfo} from "../../components/user/UserInfo";
import {CompanyInfo} from "../../components/CompanyInfo";
import {CreateAccount} from "../../components/CreateAccount";
import {Paper, Button, Typography, Grid, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import {useSnackbar} from "notistack";
import {useStore} from "../../stores";
import {useNavigate, useMatch} from "react-router-dom";
import {LOGO_TRAVELOKA} from "../../utils/constraint";
import {makeStyles} from "@material-ui/core/styles";
import {observer} from "mobx-react-lite";
import {UserRole} from "../../models/types";
import {Oops} from "../../components/Error/Oops";

const useStyle = makeStyles({
    root: {
        width: "80%",
        minHeight: "500px",
        margin: "2rem auto",
        padding: "0 3rem"
    }
})

export const Register: FC = observer(() => {
    const {sSignUp, isLoggedIn, currentUser, role} = useStore();
    const classes = useStyle();
    const navigator = useNavigate();
    const isPartnership = useMatch("/partnership")?.pathname == "/partnership";
    sSignUp.isRegisterPartner = isPartnership;


    useEffect(() => {


        if (currentUser) {
            sSignUp.user = currentUser;
        }
    }, [currentUser])

    const {enqueueSnackbar} = useSnackbar();
    const [submitting, setSubmitting] = useState(false);

    const handleSignUp = () => {
        const {user} = sSignUp;

        const regexs = {
            phone: /^[0-9\-\+]{10,12}$/g,
            email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        }

        if (!user.name) {
            return enqueueSnackbar("Vui lòng điền họ tên đầy đủ", {variant: "error"});
        }

        if (!user.address) {
            return enqueueSnackbar("Vui lòng điền địa chỉ của bạn", {variant: "error"});
        }

        if (!user.phone) {
            return enqueueSnackbar("Vui lòng điền số điện thoại của bạn", {variant: "error"});
        }

        if (!regexs.phone.test(user.phone)) {
            return enqueueSnackbar("Số Điện thoại của bạn không đúng. Vui lòng thử lại", {variant: "error"});
        }

        if (!user.email) {
            return enqueueSnackbar("Vui lòng điền số email của bạn", {variant: "error"});
        }

        if (!regexs.email.test(user.email)) {
            return enqueueSnackbar("Email của bạn không đúng. Vui lòng thử lại", {variant: "error"});
        }

        if (sSignUp.isRegisterPartner) {
            if (!user.companyName) {
                return enqueueSnackbar("Vui lòng điền tên doanh nghiệp của bạn", {variant: "error"});
            }
            if (sSignUp.services.length == 0) {
                return enqueueSnackbar("Doanh nghiệp phải sử dụng ít nhất 1 dịch vụ", {variant: "error"});
            }
        }

        if (isLoggedIn && currentUser) {
            return;
        }

        sSignUp.doSignUp().then(([err, data]) => {
            if (err)
                return enqueueSnackbar(err.message, {variant: "error"});
        })
    }

    const handleCheckboxPartner = () => {
        sSignUp.set_isRegisterPartner(!sSignUp.isRegisterPartner)
    }
    return (
        <BasicLayout>
            <Paper
                sx={{position: "relative"}}
                elevation={12}
                className={classes.root}
            >

                {role == UserRole.USER ? <>
                        <Grid container justifyContent={"center"} pt={2}>
                            <img src={LOGO_TRAVELOKA} alt="Logo"/>
                        </Grid>

                        <Typography variant={"h4"} align={"center"}>
                            {sSignUp.isRegisterPartner ? "Đăng kí tài khoản đối tác" : "Đăng kí tài khoản người dùng"}
                        </Typography>

                        <UserInfo setUser={sSignUp.get_User()} isView={false} user={sSignUp.user}/>

                        {!isPartnership && <FormControlLabel
                            control={<Checkbox checked={sSignUp.isRegisterPartner} onChange={handleCheckboxPartner}/>}
                            label="Đăng kí tài khoản doanh nghiệp"/>}
                        {sSignUp.isRegisterPartner && <CompanyInfo/>}
                        {!isLoggedIn && <CreateAccount/>}
                        <Grid container justifyContent={"center"} pt={2}>
                            <Button
                                variant="contained"
                                disabled={submitting}
                                style={{margin: "1rem"}}
                                onClick={handleSignUp}
                            >
                                Đăng ký đối tác
                            </Button>
                        </Grid>
                    </> :
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Oops>
                            <Typography>Không thể tiếp tục nâng hạng mức tài khoản.</Typography>
                        </Oops>
                    </Grid>
                }
            </Paper>
        </BasicLayout>
    );
});
