import {FC, useCallback, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {BasicLayout} from "../../layouts/BasicLayout";
import {useStore} from "../../stores";
import {Service} from "../../models/Service";
import {useSnackbar} from "notistack";
import {Button, FormControl, Grid, InputLabel, OutlinedInput, Paper, Typography} from "@mui/material";
import {ClassifyTable} from "./ClassifyTable";

export const ServiceDetail: FC = observer(() => {
    const {sServiceDetail} = useStore();
    const {id} = useParams();
    const navigator = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        sServiceDetail.set_isCreateNew(id == "new");
        if (!sServiceDetail.isCreateNew) {
            if (id) {
                Service.getById(id).then(([err, data]) => {
                    if (err) {
                        enqueueSnackbar(err.message, {variant: "error"});
                    }
                    sServiceDetail.set_service(data);
                });
            } else {
                navigator("/404");
            }
        } else {
            sServiceDetail.set_service(new Service());
        }
    }, [id]);

    const saveHandle = useCallback(() => {
        Service.save(sServiceDetail.service).then(([err, data]) => {
            enqueueSnackbar((err ? err : data).message, {variant: err ? "error" : "success"});
            if (!err)
                navigator("/services");
        });
    }, [])

    return <BasicLayout>
        <Paper sx={{position: "relative", padding: "1rem"}} elevation={12}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h2">Service</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="serviceName">
                            Service Name
                        </InputLabel>
                        <OutlinedInput
                            id="serviceName"
                            value={sServiceDetail.service.serviceName}
                            onChange={(event) => {
                                sServiceDetail.service.serviceName = event.target.value;
                            }}
                            label="Service Name"
                            name="ServiceName"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="serviceCode">
                            Service Code
                        </InputLabel>
                        <OutlinedInput
                            id="serviceCode"
                            value={sServiceDetail.service.serviceCode}
                            onChange={(event) => {
                                sServiceDetail.service.serviceCode = event.target.value.toUpperCase();
                            }}
                            label="Service Code"
                            name="ServiceCode"
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <ClassifyTable/>
                </Grid>
                <Grid item xs={12} container justifyContent={"flex-end"}>
                    {sServiceDetail.isCreateNew &&
                        <Button variant="outlined" color="success" onClick={saveHandle}>Save</Button>}
                </Grid>
            </Grid>
        </Paper>
    </BasicLayout>
})