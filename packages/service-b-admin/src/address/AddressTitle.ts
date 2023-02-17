import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "state";

export const AddressTitle = (record: TAddress): string => {
  return record.state || String(record.id);
};
