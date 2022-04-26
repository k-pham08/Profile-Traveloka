import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { ServiceClassify } from "./ServiceClassify";

@Entity("PRICE_BRACKET", { schema: "dbo" })
export class PriceBracket {
     @Column("uniqueidentifier", {
          primary: true,
          name: "bracket_id",
          default: () => "newid()",
     })
     bracketId: string;

     @Column("numeric", { name: "max_price", precision: 20, scale: 0 })
     maxPrice: number;

     @Column("numeric", { name: "min_price", precision: 20, scale: 0 })
     minPrice: number;

     @OneToOne(() => ServiceClassify, serviceClassify => serviceClassify.priceBracket)
     @JoinColumn([{ name: "serClassifyId", referencedColumnName: "classifyId" }])
     serClassify: ServiceClassify;
}
