import { ApiProperty } from "@nestjs/swagger";

export class RewardDto {
    @ApiProperty()
    reward: number
    @ApiProperty()
    userId: string;
}