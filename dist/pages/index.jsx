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
const link_1 = __importDefault(require("next/link"));
const Layout_1 = __importDefault(require("../components/Layout"));
const IndexPage = () => {
    return (<Layout_1.default title="Home | Next.js + TypeScript Example">
      <h1 className="hello">Hello Next.js 👋</h1>
      <p>
        <link_1.default href="/about">
          <a>About</a>
        </link_1.default>
      </p>
    </Layout_1.default>);
};
exports.default = IndexPage;
