import { Breadcrumb, Button, Col, Layout as AntdLayout, Row } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { Children } from "../../../domain/properties/components";

export interface LayoutProps extends Children {
  breadcrumbs: [];
}

export default function Layout({
  breadcrumbs,
  children,
}: Partial<LayoutProps>): JSX.Element {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <AntdLayout.Header>
        <Button
          shape="circle"
          type="text"
          icon={<HomeFilled className="text-white" />}
          href="/"
        />
      </AntdLayout.Header>
      <AntdLayout.Content className="p-5">
        <Breadcrumb>{breadcrumbs}</Breadcrumb>
        <AntdLayout className="p-5 bg-white">{children}</AntdLayout>
      </AntdLayout.Content>
      <AntdLayout.Footer>
        <Row justify="space-between">
          <Col>By Julio Jaramillo</Col>
          <Col>My Repo in Github</Col>
        </Row>
      </AntdLayout.Footer>
    </AntdLayout>
  );
}
