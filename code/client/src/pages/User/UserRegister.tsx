import {FC, SyntheticEvent, useState} from "react";
import {FormControl, Button, Paper} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useSnackbar} from "notistack";
import {CreateAccount} from "../Account";
import {UserInfo} from "../../components/user";
import {BasicLayout} from "../../layouts/BasicLayout";
import {Grid} from "@material-ui/core";
import {useStore} from "../../stores";
import {useNavigate} from "react-router-dom";

export const UserRegister: FC<{}> = observer(() => {
    const {sSignUp} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if (sSignUp.password !== sSignUp.confirm) {
            enqueueSnackbar("Mật khẩu không khớp", {variant: "error"});
            return;
        }
        sSignUp.doSignUp().then(([err, data]) => {
            if (err)
                return enqueueSnackbar(err.message, {
                    variant: "error",
                });

            navigator("/Login");

            return enqueueSnackbar("Đăng ký thành công", {
                variant: "success",
            });
        });
    };

    return (
        <BasicLayout>
            <Grid container>
                <Paper elevation={12} sx={{p: 2}}>
                    <FormControl fullWidth>
                        <UserInfo></UserInfo>
                        <CreateAccount></CreateAccount>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{m: 1}}
                            disabled={submitting}
                            onClick={submitHandler}
                        >
                            Đăng ký
                        </Button>
                    </FormControl>
                </Paper>
            </Grid>
        </BasicLayout>
    );
});
