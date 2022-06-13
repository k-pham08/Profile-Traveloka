import {ApiProperty} from "@nestjs/swagger";
import {Order} from "../../entities/Order";

class OrderDetail {
    @ApiProperty()
    productName: string;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price: number;
    @ApiProperty()
    thumbnail: string;
    @ApiProperty()
    link: string;

    order: Order;
}

export class CreateOrderDto {
    @ApiProperty()
    reward: number;
    @ApiProperty({type: [OrderDetail]})
    details: OrderDetail[];
    @ApiProperty()
    voucherCode: string;
    @ApiProperty()
    partnerId: string;
    @ApiProperty()
    userId: string;

    createdAt: Date;

    static orderIsValidChecker(dto): boolean {
        const regexesLink = /(http|https):\/\/(.*)/i;
        if (!dto.details)
            throw new Error("details is required");
        if (!(dto.details instanceof Array))
            throw new Error("details must be array ");
        if (dto.details.length == 0)
            throw new Error("details is empty");

        if (!dto.partnerId)
            throw new Error("partnerId is required");
        if (!dto.userId)
            throw new Error("userId is required");

        return dto.details.every((e, i) => {
            const content = `details[${i}]: `;
            if (!e.productName)
                throw new Error(content + `productName is required`);
            if (!e.link || !regexesLink.test(e.link))
                throw new Error(content + `link is required and is must be a link`);
            if (e.thumbnail && !regexesLink.test(e.thumbnail))
                throw new Error(content + `thumbnail is must be a link`);

            if (!e.price || typeof e.price != "number" || e.price < 25000)
                throw new Error(content + `price must be number and greater than or equal to 25000`)

            if (!e.quantity || typeof e.quantity != "number" || e.quantity < 1)
                throw new Error(content + `quantity must be number and greater than 0`);

            return true;
        });
    }
}
