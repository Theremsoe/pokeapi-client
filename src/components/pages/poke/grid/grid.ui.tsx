import { Avatar, List, ListProps, Typography } from "antd";
import { PokemonSchema } from "../../../../domain/models/pokemon";

export default function GridUI<T extends PokemonSchema>(
  props: ListProps<T>
): JSX.Element {
  return (
    <List
      itemLayout="horizontal"
      renderItem={(item: T): JSX.Element => (
        <List.Item>
          <List.Item.Meta
            className="items-center"
            avatar={
              <Avatar
                size={128}
                src={getPokeSprite(item.url)}
                className="border-neutral-200 border-4"
              />
            }
            title={
              <Typography.Title level={4} className="mx-8">
                {item.name}
              </Typography.Title>
            }
          />
        </List.Item>
      )}
      {...props}
    />
  );
}

export function extractId(url: string): string {
  return url.split("/").filter(Boolean).pop() || "";
}

export function getPokeSprite(url: string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${extractId(
    url
  )}.svg`;
}
