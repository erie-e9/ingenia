"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
const NavbarItem = (data) => {
    const [propdata] = react_1.useState(data.data);
    return (<>
           {propdata
        ? <link_1.default href={propdata.link} as={propdata.as} prefetch={propdata.prefetch}>
                        <span className="headerlink">{propdata.section}</span>
                    </link_1.default>
        : null}
        </>);
};
exports.default = NavbarItem;
