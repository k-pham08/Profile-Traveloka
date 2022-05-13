import {FC, useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {BasicLayout} from "../layouts/BasicLayout";
import {store} from "../stores";

export const Home: FC = () => {
    return (
        <BasicLayout>
            <Typography>Home</Typography>
        </BasicLayout>
    );
};
