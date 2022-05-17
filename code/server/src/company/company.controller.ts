import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@ApiTags("Company")
@Controller("company")
export class CompanyController {
     constructor(private readonly companyService: CompanyService) {}

     @Post()
     @Roles(UserRoles.ADMIN)
     create(@Body() createCompanyDto: CreateCompanyDto) {
          return this.companyService.create(createCompanyDto);
     }

     @Get()
     @Roles(UserRoles.ADMIN)
     findAll() {
          return this.companyService.findAll();
     }

     @Get(":id")
     @Roles(UserRoles.ADMIN, UserRoles.PARTNER)
     findOne(@Param("id") id: string) {
          return this.companyService.findOne(+id);
     }

     @Patch(":id")
     @Roles(UserRoles.ADMIN, UserRoles.PARTNER)
     update(@Param("id") id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
          return this.companyService.update(+id, updateCompanyDto);
     }

     @Delete(":id")
     @Roles(UserRoles.ADMIN, UserRoles.PARTNER)
     remove(@Param("id") id: string) {
          return this.companyService.remove(+id);
     }
}
