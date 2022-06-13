import {FC, useEffect, useState} from "react";
import {BasicLayout} from "../../layouts/BasicLayout";
import {UserInfo} from "../../components/user/UserInfo";
import {CompanyInfo} from "../../components/CompanyInfo";
import {CreateAccount} from "../../components/CreateAccount";
import {Paper, Button, Typography, Grid, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import {useSnackbar} from "notistack";
import {useStore} from "../../stores";
import {useNavigate, useMatch} from "react-router-dom";
import {LOGO_TRAVELOKA, MIN_YEAR_OLD_USER, regexes} from "../../utils/constraint";
import {makeStyles} from "@material-ui/core/styles";
import {observer} from "mobx-react-lite";
import {UserRole} from "../../models/types";
import {Oops} from "../../components/Error/Oops";
import {useLocation} from "react-router";

const useStyle = makeStyles({
    root: {
        width: "80%",
        minHeight: "500px",
        margin: "2rem auto",
        padding: "0 3rem"
    }
})

export const Register: FC = observer(() => {
    const [submitting, setSubmitting] = useState(false);
    const {sSignUp, isLoggedIn, currentUser, role, Logout} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const classes = useStyle();
    const navigator = useNavigate();

    const location = useLocation();
    let isPartnership = location.pathname == "/partnership";

    useEffect(() => {
        sSignUp.set_isRegisterPartner(isPartnership);
    }, [location])

    useEffect(() => {
        if (currentUser) {
            // sSignUp.user = currentUser;
            Logout();
        }
    }, [currentUser])

    useEffect(() => {
    }, [sSignUp.isRegisterPartner])

    const handleCheckboxPartner = () => {
        console.log(sSignUp.isRegisterPartner);
        sSignUp.set_isRegisterPartner(!sSignUp.isRegisterPartner)
    }

    const handleSignUp = () => {
        const {user} = sSignUp;

        sSignUp.doSignUp().then(([err, data]) => {
            setSubmitting(false);
            if (err)
                return enqueueSnackbar(err.message, {variant: "error"});
            navigator("/Login");
        }).catch((e)=>{
            enqueueSnackbar(e.message, {variant: "error"});
        })
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
                        <CreateAccount/>
                        <Grid container justifyContent={"center"} pt={2}>
                            <Button
                                variant="contained"
                                disabled={submitting}
                                style={{margin: "1rem"}}
                                onClick={handleSignUp}
                            >
                                {sSignUp.isRegisterPartner ? "Đăng ký đối tác" : "Đăng ký tài khoản"}
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
