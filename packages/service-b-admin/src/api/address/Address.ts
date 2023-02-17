import { Customer } from "../customer/Customer";

export type Address = {
  state: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  zip: number | null;
  customers?: Array<Customer>;
};
