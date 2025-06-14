import { Customerr as TCustomerr } from "../api/customerr/Customerr";

export const CUSTOMERR_TITLE_FIELD = "name";

export const CustomerrTitle = (record: TCustomerr): string => {
  return record.name?.toString() || String(record.id);
};
