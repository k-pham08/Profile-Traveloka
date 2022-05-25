import {FC, useState} from "react";
import {BasicLayout} from "../layouts/BasicLayout";
import {UserInfo} from "../components/user/UserInfo";
import {CompanyInfo} from "../components/CompanyInfo";
import {CreateAccount} from "../pages/Account/CreateAccount";
import {Paper, Button} from "@mui/material";
import {useSnackbar} from "notistack";
import {useStore} from "../stores";
import {useNavigate} from "react-router-dom";

export const PartnerRegister: FC = () => {
    const {sSignUp} = useStore();
    const navigator = useNavigate();

    const {enqueueSnackbar} = useSnackbar();
    const [subminting, setSubmitting] = useState(false);

    const handleSignUp = () => {
        sSignUp.doSignUp().then(([err, data]) => {
            if (err)
                return enqueueSnackbar(err.message, {variant: "error"});


            navigator("/Login");
            return enqueueSnackbar("Đăng ký thành công", {
                variant: "success",
            });
        });
    };

    return (
        <BasicLayout>
            <Paper
                elevation={12}
                style={{
                    width: "80%",
                    margin: "2rem auto",
                }}
            >
                <UserInfo></UserInfo>
                <CompanyInfo></CompanyInfo>
                <CreateAccount></CreateAccount>
                <Button
                    variant="contained"
                    disabled={subminting}
                    style={{margin: "0 0 2rem 2rem"}}
                    onClick={handleSignUp}
                >
                    Đăng ký đối tác
                </Button>
            </Paper>
        </BasicLayout>
    );
};
