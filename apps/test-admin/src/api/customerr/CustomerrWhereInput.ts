import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerrWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
