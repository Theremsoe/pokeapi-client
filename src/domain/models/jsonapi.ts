/**
 * @deprecated
 */
export interface Paginated {
  page: {
    currentPage: number;
    from: number;
    lastPage: number;
    perPage: number;
    to: number;
    total: number;
  };
}

/**
 * @deprecated
 */
export interface Signed {
  jsonapi: string;
}

/**
 * @deprecated
 */
export interface Timestamps {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

/**
 * @deprecated
 */
export interface Schema<T extends Timestamps> {
  id: string;
  type: string;
  attributes: T;
}

/**
 * @deprecated
 */
export interface JsonTemplate<M = Record<string, unknown>> extends Signed {
  meta: M;
}

/**
 * @deprecated
 */
export interface Resource<T> extends JsonTemplate {
  data: T;
}

/**
 * @deprecated
 */
export interface Collection<T> extends JsonTemplate<Paginated> {
  data: T[];
}

export interface PokePagination {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokeCollection<T> extends PokePagination {
  results: T[];
}
