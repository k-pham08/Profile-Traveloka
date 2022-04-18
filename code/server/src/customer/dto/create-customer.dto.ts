import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  gender: boolean;
  @ApiProperty()
  birthday: Date;
  @ApiProperty()
  address: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: number;
  @ApiProperty()
  account_id: string;
}
