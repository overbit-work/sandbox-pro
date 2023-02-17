import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  state?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  zip?: SortOrder;
};
