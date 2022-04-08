import { createContext } from "react";
import { CompanySchema } from "../models/company";
import { CompanyContextSchema } from "./schemas";

/**
 * @deprecated
 */
export const CompanyContext = createContext<
  CompanyContextSchema<CompanySchema | null>
>({
  companyContextValue: null,
});
