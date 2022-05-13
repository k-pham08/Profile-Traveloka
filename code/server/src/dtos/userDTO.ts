import {ApiProperty} from "@nestjs/swagger";

export class userDTO {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    gender: boolean;
    @ApiProperty()
    dob: number;
    @ApiProperty()
    phone: number;
    @ApiProperty()
    address: string;
    @ApiProperty()
    country: string;

    constructor(data?: any) {
        const {username, password, name, gender, dob, phone, email, address, country} = data;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;
        this.phone = phone;
        this.address = address;
        this.country = country;
    }

    public isValid() {
        return this.username && this.password && this.name && this.gender && this.email && this.dob && this.phone && this.address;
    }
}