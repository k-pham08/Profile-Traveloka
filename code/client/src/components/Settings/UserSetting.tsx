import {FC} from "react";
import {observer} from "mobx-react-lite";
import {MENU_ICONS, USER_SETTINGS} from "../../utils/constraint";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export const UserSetting: FC<{closeHandle: Function}> = observer(({closeHandle}) => {
    return <>{USER_SETTINGS.map(({title, handle}, index) => (
        <MenuItem
            key={title}
            onClick={() => {
                if (handle) handle();
                else
                    closeHandle()
            }}
        >
            <Typography
                textAlign="center"
                sx={{
                    width: "fit-content",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img
                    src={MENU_ICONS[index]}
                    alt="Menu"
                    style={{
                        marginRight: "1rem",
                    }}
                />
                <span>{title}</span>
            </Typography>
        </MenuItem>
    ))}</>
});