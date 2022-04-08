import { Dispatch, SetStateAction } from "react";

/**
 * @deprecated
 */
export interface CompanyContextSchema<T> {
  companyContextValue: T;
  setCompanyContextValue?: Dispatch<SetStateAction<T>>;
}
