import { AxiosPromise, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import GridUI from "./grid.ui";
import http, { toJsonApiParams } from "../../../../domain/http/pokeapi";
import {
  PokeCollection,
  PokePagination,
} from "../../../../domain/models/jsonapi";
import { TablePaginationConfig } from "antd/lib/table/interface";
import { PokemonSchema } from "../../../../domain/models/pokemon";
import { FormattedMessage, FormattedNumber } from "react-intl";
import SearchUI from "../search/search.ui";
import { Typography } from "antd";

export default function Grid(): JSX.Element {
  const [data, setData] = useState<PokemonSchema[]>([]);
  const [pagination, setPagination] = useState<PokePagination>({
    count: 0,
    next: null,
    previous: null,
  });
  const [fetch, setFetch] = useState<AxiosPromise<
    PokeCollection<PokemonSchema>
  > | null>(null);
  const [filter, setFilter] = useState<string>("");

  const fetchCollection = (pagination?: TablePaginationConfig): void => {
    const fetch = http.get("/pokeapi", {
      params: toJsonApiParams(pagination),
    });

    fetch
      .then((res: AxiosResponse<PokeCollection<PokemonSchema>>): void => {
        const {
          count,
          previous,
          next,
          results,
        }: PokeCollection<PokemonSchema> = res.data;
        setData(results);
        setPagination({ count, previous, next });
      })
      .finally((): void => setFetch(null));

    setFetch(fetch);
  };

  const onSearch = (value: string): void => {
    setFilter(value.trim().toLocaleLowerCase());
  };

  useEffect(() => fetchCollection({ current: 1, pageSize: 1126 }), []);

  return (
    <>
      <SearchUI onSearch={onSearch} />
      {filter && (
        <Typography.Title level={3}>
          <FormattedMessage
            id="common.search.description"
            defaultMessage="Resultados de la búsqueda"
          />
        </Typography.Title>
      )}

      <GridUI
        loading={!!fetch}
        dataSource={data.filter(
          (item: PokemonSchema): boolean =>
            !filter || item.name.toLocaleLowerCase().includes(filter)
        )}
        pagination={
          filter
            ? false
            : {
                showSizeChanger: true,
                total: pagination.count,
                showTotal: () => (
                  <FormattedMessage
                    id="common.grids.total.title"
                    defaultMessage="Total {total} item(s)"
                    values={{
                      total: <FormattedNumber value={pagination.count} />,
                    }}
                  />
                ),
              }
        }
      />
    </>
  );
}
