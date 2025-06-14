import { Module } from "@nestjs/common";
import { CustomerrModuleBase } from "./base/customerr.module.base";
import { CustomerrService } from "./customerr.service";
import { CustomerrController } from "./customerr.controller";
import { CustomerrResolver } from "./customerr.resolver";

@Module({
  imports: [CustomerrModuleBase],
  controllers: [CustomerrController],
  providers: [CustomerrService, CustomerrResolver],
  exports: [CustomerrService],
})
export class CustomerrModule {}
