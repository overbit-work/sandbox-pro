import { Customer } from "../customer/Customer";

export type Address = {
  city: string | null;
  state: string | null;
  address_2: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  zip: number | null;
  customers?: Array<Customer>;
};
