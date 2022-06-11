import React from 'react'
import { FormControl, Grid, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material";
import { useStore } from "../../stores";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Order } from "../../models/Order";


export const SerInfo = () => {

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
    <Typography variant="h6" sx={{marginBottom: "1rem"}}>Customer</Typography>
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <FormControl fullWidth>
            <InputLabel>
                Customer name
            </InputLabel>
            <OutlinedInput
                id="customername"
                label="customer name"
                value={sOrderDetail.order.user.name}
            />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl fullWidth>
            <InputLabel>
                Address
            </InputLabel>
            <OutlinedInput
                id="customer address"
                label="Address"
                value={sOrderDetail.order.user.address}
            />
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>
                Email
            </InputLabel>
            <OutlinedInput
                id="customer email"
                label="email"
                value={sOrderDetail.order.user.email}
            />
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>
                Phone number
            </InputLabel>
            <OutlinedInput
                id="customer phone"
                label="phone number"
                value={sOrderDetail.order.user.phone}
            />
        </FormControl>
        </Grid>
    </Grid>
    </Paper>
  )
}
