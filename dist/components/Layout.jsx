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
const head_1 = __importDefault(require("next/head"));
const footer_1 = __importDefault(require("./commons/footer"));
const navbar_1 = __importDefault(require("./commons/navbar"));
const Layout = ({ children, title = 'This is the default title', }) => (<div>
    <head_1.default>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <link rel="icon" type="image/x-icon" href="/static/images/icons/favicon.png"/>
      <link rel="shortcut icon" href="/static/images/icons/favicon.png"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </head_1.default>
    <navbar_1.default />
    {children}
    <footer_1.default />
  </div>);
exports.default = Layout;
