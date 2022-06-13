import {FC} from "react";
import MaterialTable, {Column} from "material-table";
import {Service} from "../../models/Service";
import {generalStyles} from "../../utils/theme";
import {observer} from "mobx-react-lite";
import {store, useStore} from "../../stores";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

export const ServiceTable: FC = observer(() => {
    const {services, set_services} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();
    const columns: Column<Service>[] = [
        {title: "Service", field: "serviceName"},
        {title: "Service Code", field: "serviceCode"},
    ];

    return <MaterialTable
        style={generalStyles.paddingTable}
        title="Services Manager"
        columns={columns}
        data={services}
        localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this Service?'}}}}
        editable={{
            onRowUpdate: (newData, oldData) => {
                return Service.update(newData).then(([err, data]) => {
                    enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                    if (!err) {
                        store.set_services(services.map((s) => s.serviceId === newData.serviceId ? newData : s));
                    }
                });
            },
            onRowDelete: oldData => {
                return Service.delete(oldData.serviceId).then(([err, data]) => {
                    enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                    if (!err) {
                        store.set_services(services.filter((s) => s.serviceId !== oldData.serviceId));
                    }
                });
            },
        }}
        actions={[
            {
                icon: "info", tooltip: "Detail Service", onClick: (event, rowData) => {
                    rowData = rowData as Service;
                    navigator(`/services/` + rowData.serviceId);
                }
            },
            {
                icon: "add", tooltip: "Add Service", isFreeAction: true, onClick: (event) => {
                    navigator("/services/new");
                }
            }
        ]}
        options={{
            actionsColumnIndex: -1,
            pageSize: services.length,
            paging: false,
        }}
    />
})