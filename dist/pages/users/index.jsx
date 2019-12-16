"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const Layout_1 = __importDefault(require("../../components/Layout"));
const List_1 = __importDefault(require("../../components/List"));
const sample_api_1 = require("../../utils/sample-api");
const WithInitialProps = ({ items, pathname }) => (<Layout_1.default title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List_1.default items={items}/>
    <p>
      <link_1.default href="/">
        <a>Go home</a>
      </link_1.default>
    </p>
  </Layout_1.default>);
WithInitialProps.getInitialProps = async ({ pathname }) => {
    // Example for including initial props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items = await sample_api_1.sampleFetchWrapper('http://localhost:3000/api/users');
    return { items, pathname };
};
exports.default = WithInitialProps;
