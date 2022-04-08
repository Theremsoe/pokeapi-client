import "antd/dist/antd.css";
import "./App.css";
import { IntlProvider } from "react-intl";
import lang from "./lang/en-US.json";
import Layout from "./components/common/layout/layout";
import { BrowserRouter } from "react-router-dom";
import LayoutUI from "./components/pages/poke/layout.ui";

export default function App(): JSX.Element {
  return (
    <IntlProvider messages={lang} locale="en">
      <Layout>
        <BrowserRouter>
          <LayoutUI />
        </BrowserRouter>
      </Layout>
    </IntlProvider>
  );
}
