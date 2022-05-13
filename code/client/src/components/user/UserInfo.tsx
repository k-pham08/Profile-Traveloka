import {FC, useState} from "react";
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
} from "@mui/material";
import {observer} from "mobx-react-lite"
import {useStore} from "../../stores";

export const UserInfo: FC<{}> = observer(({ }) => {
    const {sSignUp} = useStore();
    const [date, setDate] = useState<Date | null>(new Date());

    const [gender, setGender] = useState("");

    const handleDateChange = (newValue: unknown, keyboardInputValue?: string | undefined) => {
        if(newValue instanceof Date){
            setDate(newValue);
            sSignUp.set_DOB(newValue);
        }

    };

    const handleGenderChange = (event: SelectChangeEvent) => {
        sSignUp.set_gender(+event.target.value)
    };

    console.log("render")

    return (
        <div style={{marginRight: "1rem"}}>
            <h2 style={{margin: "1rem"}}>Thông tin cá nhân</h2>
            <FormControl sx={{m: 1, width: 1}}>
                <InputLabel htmlFor="outlined-adornment">
                    Tên đầy đủ
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment"
                    defaultValue={sSignUp.fullName}
                    onChange={(event) => sSignUp.set_fullName(event.target.value)}
                    startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                    }
                    label="Tên đầy đủ"
                    name="name"
                    required
                />
            </FormControl>
            <FormControl sx={{m: 1, width: "25ch"}}>
                <InputLabel id="demo-simple-select-label">
                    Giới tính
                </InputLabel>
                <Select
                    labelId="gender-select-label"
                    id="gender-select"
                    label="Giới tính"
                    name="gender"
                    defaultValue={sSignUp.gender + ""}
                    onChange={handleGenderChange}
                    required
                >
                    <MenuItem value={0}>Nam</MenuItem>
                    <MenuItem value={1}>Nữ</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, width: "25ch"}} variant="outlined">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Ngày sinh"
                        inputFormat="dd/MM/yyyy"
                        value={sSignUp.dob}
                        onChange={handleDateChange}
                        renderInput={(params: any) => {
                            return (
                                <TextField name="dob" {...params} />
                            )
                        }}
                    />
                </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{m: 1}}>
                <InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
                <OutlinedInput
                    id="outlined"
                    label="Địa chỉ"
                    name="address"
                    required
                    defaultValue={sSignUp.address}
                    onChange={(event) => sSignUp.set_address(event.target.value)}
                />
            </FormControl>
            <FormControl fullWidth sx={{m: 1, width: "50ch"}}>
                <InputLabel htmlFor="outlined">Email</InputLabel>
                <OutlinedInput
                    id="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={sSignUp.email}
                    onChange={(event) => sSignUp.set_email(event.target.value)}
                    required
                />
            </FormControl>
            <FormControl fullWidth sx={{m: 1, width: "50ch"}}>
                <InputLabel htmlFor="outlined">Số điện thoại</InputLabel>
                <OutlinedInput
                    id="outlined"
                    label="Số điện thoại"
                    name="phone"
                    defaultValue={sSignUp.phone}
                    onChange={(event) => sSignUp.set_phone(event.target.value)}
                    required
                />
            </FormControl>
        </div>
    );
});
