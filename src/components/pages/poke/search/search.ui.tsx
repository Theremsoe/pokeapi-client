import { Form, Input, Typography } from "antd";
import { SearchProps } from "antd/lib/input";
import { FormattedMessage, IntlShape, useIntl } from "react-intl";

export default function SearchUI(props: SearchProps): JSX.Element {
  const intl: IntlShape = useIntl();

  return (
    <>
      <Typography.Title level={1} className="!mb-1">
        <FormattedMessage
          id="common.pages.finder.title"
          defaultMessage="Pokemond finder"
        />
      </Typography.Title>
      <Typography.Title level={5} disabled className="!mt-0">
        <FormattedMessage
          id="common.pages.finder.description"
          defaultMessage="El que quiere Pokemons, que los busque."
        />
      </Typography.Title>
      <Form.Item>
        <Input.Search
          size="large"
          allowClear
          enterButton={
            <FormattedMessage
              id="commons.buttons.search"
              defaultMessage="Buscar"
            />
          }
          placeholder={intl.formatMessage({
            id: "common.forms.pokemon.search.placeholder",
            defaultMessage: "Ingrese el nombre a buscar",
          })}
          {...props}
        />
      </Form.Item>
    </>
  );
}
