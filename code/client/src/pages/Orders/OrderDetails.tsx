import { Grid, Typography, Paper } from "@mui/material";
import { DetailTable } from "../../components/Order/DetailTable";
import { BasicLayout } from "../../layouts/BasicLayout";
import {FC} from 'react';
import { CusInfo } from "../../components/Order/CusInfo";
import { SerInfo } from "../../components/Order/SerInfo";

export const OrderDetail: FC = () => {
    
    return <BasicLayout>
        <Paper sx={{position: "relative", padding: "1rem"}} elevation={12}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2">Order Detail</Typography>
                </Grid>
                <Grid item xs={6}>
                    <CusInfo/>
                </Grid>
                <Grid item xs={6}>
                   <SerInfo/>
                </Grid>
                <Grid item xs={12}>
                    <DetailTable/>
                </Grid>
            </Grid>
        </Paper>

    </BasicLayout>
}