import {FC, useEffect, useState} from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {
    Select,
    SelectChangeEvent,
    MenuItem,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Grid,
} from "@mui/material";
import {User} from "../../models/User";
import {observer} from "mobx-react";

export const UserInfo: FC<{ user: User; setUser?: any; isView?: boolean }> = observer(({user, setUser, isView}) => {
    useEffect(() => {
        console.log("change", user, isView)
    }, [user])

    const handleDateChange = (newValue: unknown) => {
        if (newValue instanceof Date)
            setUser.dob = newValue;
    };

    const handleGenderChange = (event: SelectChangeEvent) => {
        setUser.gender = !!event.target.value;
    };

    return (
        <Grid container spacing={2} padding={"2rem"}>
            <Grid item xs={12}>
                <h2>Thông tin cá nhân</h2>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel htmlFor="outlined-adornment">
                        Tên đầy đủ
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment"
                        value={user.name}
                        onChange={(event) => {
                            console.log({...user})
                            user.set_name(event.target.value);
                        }}
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        label="Tên đầy đủ"
                        name="name"
                        required
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel id="demo-simple-select-label">
                        Giới tính
                    </InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        label="Giới tính"
                        name="gender"
                        value={+user.gender + ""}
                        onChange={handleGenderChange}
                        required
                    >
                        <MenuItem value={0}>Nam</MenuItem>
                        <MenuItem value={1}>Nữ</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Ngày sinh"
                            inputFormat="dd/MM/yyyy"
                            value={user.dob}
                            onChange={handleDateChange}
                            disabled={isView}
                            renderInput={(params: any) => <TextField name="dob" {...params}/>}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Địa chỉ"
                        name="address"
                        required
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        value={user.address}
                        onChange={(event) => {
                            setUser.address = event.target.value;
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel htmlFor="outlined">Email</InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Email"
                        name="email"
                        type="email"
                        value={user.email}
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        onChange={(event) => {
                            setUser.email = event.target.value;
                        }}
                        required
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel htmlFor="phone">
                        Số điện thoại
                    </InputLabel>
                    <OutlinedInput
                        id="phone"
                        label="Số điện thoại"
                        name="phone"
                        value={user.phone}
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        onChange={(event) => {
                            setUser.phone = event.target.value;
                        }}
                        required
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
});
