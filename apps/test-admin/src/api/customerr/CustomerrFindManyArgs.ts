import { CustomerrWhereInput } from "./CustomerrWhereInput";
import { CustomerrOrderByInput } from "./CustomerrOrderByInput";

export type CustomerrFindManyArgs = {
  where?: CustomerrWhereInput;
  orderBy?: Array<CustomerrOrderByInput>;
  skip?: number;
  take?: number;
};
