import { Schema, Resource, Timestamps, Collection } from "./jsonapi";

/**
 * @deprecated
 */
export interface CompanyMarketItem {
  id: number;
  datetime: string;
  value: number;
}

/**
 * @deprecated
 */
export interface CompanyAttributes extends Timestamps {
  name: string;
  description: string;
  symbol: string;
  market: CompanyMarketItem[];
}

/**
 * @deprecated
 */
export type CompanySchema = Schema<CompanyAttributes>;
/**
 * @deprecated
 */
export type CompanyResource = Resource<CompanySchema>;
/**
 * @deprecated
 */
export type CompanyCollection = Collection<CompanySchema>;
