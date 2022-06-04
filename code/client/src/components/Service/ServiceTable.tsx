import {FC} from "react";
import MaterialTable, {Column} from "material-table";
import {Service} from "../../models/Service";
import {generalStyles} from "../../utils/theme";
import {observer} from "mobx-react-lite";
import {store} from "../../stores";

export const ServiceTable: FC = observer(() => {

    const columns: Column<Service>[] = [
        {title: "Service", field: "serviceName"},
        {title: "Service Code", field: "serviceCode"},
    ];

    return <MaterialTable
        style={generalStyles.paddingTable}
        title="Services Manager"
        columns={columns}
        data={store.services}
        localization={{body: {editRow: {deleteText: 'Are you sure you want to delete this User?'}}}}
        editable={{
            onRowUpdate: (newData, oldData) => {
                return Service.update(newData).then(([err, data]) => {

                });
            },
            onRowDelete: oldData => {
                return new Promise((resolve) => {
                    resolve({});
                })
            },
        }}
        actions={[
            {
                icon: "info", tooltip: "Detail Service", onClick: (event) => {
                }
            },
            {
                icon: "add", tooltip: "Add Service", isFreeAction: true, onClick: (event) => {

                }
            }
        ]}
        options={{
            actionsColumnIndex: -1,
            pageSize: store.services.length,
            paging: false,
        }}
    />
})