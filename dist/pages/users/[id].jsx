"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Layout_1 = __importDefault(require("../../components/Layout"));
const ListDetail_1 = __importDefault(require("../../components/ListDetail"));
const sample_api_1 = require("../../utils/sample-api");
class InitialPropsDetail extends React.Component {
    render() {
        const { item, errors } = this.props;
        if (errors) {
            return (<Layout_1.default title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout_1.default>);
        }
        return (<Layout_1.default title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`}>
        {item && <ListDetail_1.default item={item}/>}
      </Layout_1.default>);
    }
}
InitialPropsDetail.getInitialProps = async ({ query }) => {
    try {
        const { id } = query;
        const item = await sample_api_1.sampleFetchWrapper(`http://localhost:3000/api/users/${Array.isArray(id) ? id[0] : id}`);
        return { item };
    }
    catch (err) {
        return { errors: err.message };
    }
};
exports.default = InitialPropsDetail;
