import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  state?: string | null;
  address_2?: string | null;
  address_1?: string | null;
  zip?: number | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
};
