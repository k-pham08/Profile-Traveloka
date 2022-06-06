import {FC, useEffect, useState} from "react";
import {generalStyles} from "../../utils/theme";
import {store, useStore} from "../../stores";
import MaterialTable, {Column} from "material-table";
import {useSnackbar} from "notistack";
import {ServiceClassify} from "../../models/ServiceClassify";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

export const ClassifyTable: FC = observer(() => {
    const {sServiceDetail} = useStore();
    const {enqueueSnackbar} = useSnackbar();
    const navigator = useNavigate();

    const columns: Column<ServiceClassify>[] = [
        {title: "Name", field: "name", type: "string"},
        {title: "Code", field: "classifyCode", type: "string"},
        {title: "Min", field: "minPrice", type: "numeric"},
        {title: "Max", field: "maxPrice", type: "numeric"}
    ];

    const setClassify = (list: ServiceClassify[]) => {
        sServiceDetail.service.set_serviceClassifies(list);
    }

    return <MaterialTable
        style={generalStyles.paddingTable}
        title={`Classifies Of "${sServiceDetail.service.serviceName}"`}
        columns={columns}
        data={sServiceDetail.service.serviceClassifies}
        localization={{
            body: {
                editRow: {deleteText: 'Are you sure you want to delete this Classify?'},
                emptyDataSourceMessage: "No Classifies To Display"
            }
        }}
        editable={{
            onRowAdd: newData => {
                return new Promise<ServiceClassify[]>((resolve, reject) => {
                    if (sServiceDetail.isCreateNew) {
                        resolve([newData, ...sServiceDetail.service.serviceClassifies]);
                    } else
                        ServiceClassify.addClassifyService(newData, sServiceDetail.service.serviceId).then(([err, data]) => {
                            enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                            if (!err) {
                                resolve([newData, ...sServiceDetail.service.serviceClassifies]);
                            }
                        });
                }).then(setClassify);
            },
            onRowUpdate: (newData, oldData) => {
                return new Promise<ServiceClassify[]>((resolve, reject) => {
                    if (sServiceDetail.isCreateNew) {
                        resolve(sServiceDetail.service.serviceClassifies.map((s) => s.classifyCode == oldData?.classifyCode ? newData : s));
                    } else
                        ServiceClassify.update(newData).then(([err, data]) => {
                            enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                            if (!err) {
                                resolve(sServiceDetail.service.serviceClassifies.map((s) => s.classifyId == newData.classifyId ? newData : s));
                            }
                        })
                }).then(setClassify);
            },
            onRowDelete: oldData => {
                return new Promise<ServiceClassify[]>((resolve, reject) => {
                    if (sServiceDetail.isCreateNew) {
                        resolve(sServiceDetail.service.serviceClassifies.filter((s) => s.classifyCode == oldData.classifyCode));
                    } else
                        ServiceClassify.delete(oldData.classifyId).then(([err, data]) => {
                            enqueueSnackbar(err ? err.message : data.message, {variant: err ? "error" : "success"});
                            if (!err) {
                                resolve(sServiceDetail.service.serviceClassifies.filter((s) => s.classifyCode == oldData.classifyCode));
                            }
                        });
                }).then(setClassify);
            },
        }}
        options={{
            actionsColumnIndex: -1,
            pageSize: store.services.length,
            paging: false,
        }}
    />
});