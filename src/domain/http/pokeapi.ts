import { TablePaginationConfig } from "antd";
import axios from "axios";
import QueryString from "qs";

export default axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
  paramsSerializer: (params: unknown): string =>
    QueryString.stringify(params, { arrayFormat: "brackets" }),
});

export function toJsonApiPagination(
  pagination?: TablePaginationConfig
): Record<string, unknown> {
  const size: number = pagination?.pageSize || 15;
  const page: number = pagination?.current || 1;

  return {
    offset: (page - 1) * size,
    limit: size,
  };
}

export function toJsonApiParams(
  pagination?: TablePaginationConfig
): Record<string, unknown> {
  return {
    ...toJsonApiPagination(pagination),
  };
}
