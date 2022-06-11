import React from 'react'
import { FormControl, Grid, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material";
import { useStore } from "../../stores";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Order } from "../../models/Order";

export const CusInfo = () => {

    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams();
    const {sOrderDetail} = useStore();

    useEffect(() => {
        if(id){
            Order.getById(id).then(([err, data]) => {
                if(err){
                    enqueueSnackbar(err.message, {variant: "error"});
                }
                sOrderDetail.set_order(data);
            })
        }
    }); 


    return (
        <Paper sx={{padding: "1rem"}} elevation={4}>
        <Typography variant="h6" sx={{marginBottom: "1rem"}}>Service</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel>
                    Company name
                </InputLabel>
                <OutlinedInput
                    id="companyname"
                    label="company name"
                    value={sOrderDetail.order.partner.companyName}
                />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel>
                    Address
                </InputLabel>
                <OutlinedInput
                    id="address"
                    label="Address"
                    value={sOrderDetail.order.partner.address}
                />
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>
                    Email
                </InputLabel>
                <OutlinedInput
                    id="email"
                    label="email"
                    value={sOrderDetail.order.partner.email}
                />
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>
                    Phone number
                </InputLabel>
                <OutlinedInput
                    id="phone"
                    label="phone number"
                    value={sOrderDetail.order.partner.phone}
                />
            </FormControl>
            </Grid>
        </Grid>
        </Paper>
    )
}
