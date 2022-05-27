import {FC, ReactElement} from "react";
import ErrorIcon from '@mui/icons-material/Error';
import {Backdrop, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {theme} from "../../utils/theme";

export const Oops: FC<{ children: ReactElement }> = ({children}) => {

    return <Backdrop
        sx={{color: '#fff', zIndex: 1, position: "absolute"}}
        open={true}
    >
        <Grid container direction={"column"} justifyContent={"center"} minHeight={"400px"} alignItems={"center"}>
            <ErrorIcon fontSize={"large"} style={{margin: theme.spacing(1)}}/>

            {children}

            <Link to={"/"} style={{margin: theme.spacing(1)}}>
                <Button variant="contained">Back Home</Button>
            </Link>
        </Grid>
    </Backdrop>
}