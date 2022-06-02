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
    FormControl,
    TextField,
    Grid, FormControlLabel, FormLabel, RadioGroup, Radio,
} from "@mui/material";
import {User} from "../../models/User";
import {observer} from "mobx-react";
import {roles, UserRole} from "../../models/types";
import {useStore} from "../../stores";

export const UserInfo: FC<{ user: User; setUser?: any; isView?: boolean }> = observer(({user, setUser, isView}) => {
    const {role} = useStore();

    const handleDateChange = (newValue: unknown) => {
        if (newValue instanceof Date)
            user.dob = newValue;
    };

    const handleGenderChange = (event: SelectChangeEvent) => {
        user.gender = (event.target.value == "1");
    };

    const handleChangeType = (event: SelectChangeEvent) => {
        user.type = event.target.value;
    }

    return (
        <Grid container spacing={2}>
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
                            user.name = event.target.value;
                        }}
                        label="Tên đầy đủ"
                        name="name"
                        required
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} style={{display: "flex", alignItems: "center"}}>
                <FormControl disabled={isView}>
                    <FormLabel id="radio-buttons-group">Giới tính</FormLabel>
                    <RadioGroup row value={+user.gender} name="radio-buttons-group" onChange={handleGenderChange}>
                        <FormControlLabel value={0} control={<Radio/>} label="Female"/>
                        <FormControlLabel value={1} control={<Radio/>} label="Male"/>
                    </RadioGroup>
                </FormControl>
                {role == UserRole.ADMIN && <FormControl disabled={isView}>
                    <InputLabel id="demo-simple-select-label">Quyền</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={user.type}
                        label="Quyền"
                        onChange={handleChangeType}
                    >
                        {roles.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                </FormControl>}
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
                    <InputLabel htmlFor="address">Địa chỉ</InputLabel>
                    <OutlinedInput
                        id="address"
                        label="Địa chỉ"
                        name="address"
                        required
                        value={user.address}
                        onChange={(event) => {
                            setUser.address = event.target.value;
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth disabled={isView}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        value={user.email}
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
