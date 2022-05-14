import {FC} from "react";
import {observer} from "mobx-react-lite";
import {ADMIN_SETTINGS} from "../../utils/constraint";
import {MenuItem, Typography} from "@mui/material";

export const AdminSetting: FC<{ handleClose: Function }> = observer(({handleClose}) => {
    return <>
        {ADMIN_SETTINGS.map(({title, handle}) => (
            <MenuItem
                key={title}
                onClick={() => {
                    if (handle)
                        handle();
                    else
                        handleClose();
                }}
            >
                <Typography textAlign="center">
                    {title}
                </Typography>
            </MenuItem>
        ))}</>
});