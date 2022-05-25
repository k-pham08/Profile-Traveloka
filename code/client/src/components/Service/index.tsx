import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import {store, useStore} from "../../stores";

export const ServicesChooseGroup: FC<{addList: Function, removeList: Function}> = observer(({addList, removeList}) => {
    const {services} = useStore();


    // return <></>;
    return <>{services.map((service) => (
            <Grid item xs={2}>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={(event) => {
                                if (event.target.checked) {
                                    addList(service.serviceCode);
                                } else {
                                    removeList(service.serviceCode);
                                }
                            }}
                        />
                    }
                    label={service.serviceName}
                    // onChange={(event) =>
                    // 	sSignUp.set_services(service.code)
                    // }
                />
            </Grid>
        ))}</>;
})