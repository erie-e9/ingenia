"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamic_1 = __importDefault(require("next/dynamic"));
require("../../../public/styles/commons/footer/index.scss");
const DynamicFooterComponent = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./footer-content"))), { ssr: false,
});
const DynamicFooterLinks = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./footer-links"))), { ssr: false,
});
const Footer = () => {
    return (<>
        <footer>
            <div className="footer-wrapper">
              
              <div className="footer-head-wrapper">
                <DynamicFooterComponent />
                <DynamicFooterLinks />
              </div>
            </div>
        </footer>
      </>);
};
exports.default = Footer;
