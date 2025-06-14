import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerrService } from "./customerr.service";
import { CustomerrControllerBase } from "./base/customerr.controller.base";

@swagger.ApiTags("customerrs")
@common.Controller("customerrs")
export class CustomerrController extends CustomerrControllerBase {
  constructor(protected readonly service: CustomerrService) {
    super(service);
  }
}
