import {FC, useEffect, useState} from "react";
import {BasicLayout} from "../layouts/BasicLayout";
import {store, useStore} from "../stores";
import {useSnackbar} from "notistack";
import {observer} from "mobx-react-lite";

export const Voucher: FC = observer(() => {
    const {gotoVoucher} = useStore();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        gotoVoucher((err: { message: string }) => {
            enqueueSnackbar(err.message, {variant: "error"});
        });
    })

    return (
        <BasicLayout>
        </BasicLayout>
    );
});
