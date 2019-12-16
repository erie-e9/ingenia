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
const Layout_1 = __importDefault(require("../components/Layout"));
const contact_1 = __importDefault(require("../components/pages/contact"));
require("../public/styles/pages/contact/index.scss");
const ContactPage = () => (<Layout_1.default title="Contact | Next.js + TypeScript Example">
    <contact_1.default />
  </Layout_1.default>);
exports.default = ContactPage;
