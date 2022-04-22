import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AccountService } from "./account.service";
import { UpdateAccountDto } from "./dto/update-account.dto";

@ApiTags("Account")
@Controller("account")
export class AccountController {
     constructor(private readonly accountService: AccountService) {}

     @Get()
     findAll() {
          return this.accountService.findAll();
     }

     @Get(":id")
     findOne(@Param("id") id: string) {
          return this.accountService.findOne(id);
     }

     @Patch(":id")
     update(@Param("id") id: string, @Body() updateAccountDto: UpdateAccountDto) {
          return this.accountService.update(id, updateAccountDto);
     }
}
