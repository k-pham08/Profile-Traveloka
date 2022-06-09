import React, {ChangeEvent, FC} from "react";
import {ServiceStore} from "../../stores/ServiceStore";
import {observer} from "mobx-react-lite";
import {useStore} from "../../stores";
import {Checkbox, FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Paper} from "@mui/material";

export const ServicesChooseGroup: FC<{ store: ServiceStore, isView?: boolean }> = observer(({store, isView}) => {
    const {services, sProfile} = useStore();

    const onChangeService = ({target}: ChangeEvent<HTMLInputElement>) => {
        if (target.checked) {
            store.add_services(target.value);
        } else {
            store.remove_service(target.value);
        }
    }

    return <Paper elevation={8} style={{padding: "2rem", marginBottom: "1rem", width: "100%"}}>
        <h2>Thông tin doanh nghiệp</h2>
        <FormControl fullWidth disabled={sProfile.isView}>
            <InputLabel htmlFor="outlined-adornment">
                Tên Doanh Nghiệp
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment"
                value={sProfile.user.companyName}
                onChange={(event) => {
                    sProfile.user.companyName = event.target.value;
                }}
                label="Tên Doanh Nghiệp"
                name="name"
                required
            />
        </FormControl>
        <Grid container>{services.map((service) => (
        <Grid key={service.serviceCode} item xs={2}>
            <FormControlLabel disabled={!!isView} control={
                <Checkbox value={service.serviceCode}
                          checked={store.services.includes(service.serviceCode)}
                          onChange={onChangeService}/>} label={service.serviceName}/>
        </Grid>
    ))}</Grid>
    </Paper>
})