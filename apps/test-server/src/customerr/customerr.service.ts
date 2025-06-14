import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerrServiceBase } from "./base/customerr.service.base";

@Injectable()
export class CustomerrService extends CustomerrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
