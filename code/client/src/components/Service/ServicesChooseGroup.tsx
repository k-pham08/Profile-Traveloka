import React, {ChangeEvent, FC} from "react";
import {ServiceStore} from "../../stores/ServiceStore";
import {observer} from "mobx-react-lite";
import {useStore} from "../../stores";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";

export const ServicesChooseGroup: FC<{ store: ServiceStore, isView?: boolean }> = observer(({store, isView}) => {
    const {services} = useStore();

    const onChangeService = ({target}: ChangeEvent<HTMLInputElement>) => {
        if (target.checked) {
            store.add_services(target.value);
        } else {
            store.remove_service(target.value);
        }
    }

    return <>{services.map((service) => (
        <Grid key={service.serviceCode} item xs={2}>
            <FormControlLabel disabled={!!isView} control={
                <Checkbox value={service.serviceCode}
                          checked={store.services.includes(service.serviceCode)}
                          onChange={onChangeService}/>} label={service.serviceName}/>
        </Grid>
    ))}</>;
})