import * as graphql from "@nestjs/graphql";
import { CustomerrResolverBase } from "./base/customerr.resolver.base";
import { Customerr } from "./base/Customerr";
import { CustomerrService } from "./customerr.service";

@graphql.Resolver(() => Customerr)
export class CustomerrResolver extends CustomerrResolverBase {
  constructor(protected readonly service: CustomerrService) {
    super(service);
  }
}
