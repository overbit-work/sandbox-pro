import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  address_2?: StringNullableFilter;
  id?: StringFilter;
  address_1?: StringNullableFilter;
  zip?: IntNullableFilter;
  customers?: CustomerListRelationFilter;
};
