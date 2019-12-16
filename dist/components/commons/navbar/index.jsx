"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
const links_1 = __importDefault(require("../../../utils/links"));
// import Ilinks from '../../../interfaces/Ilinks'
const item_1 = __importDefault(require("./item"));
require("../../../public/styles/commons/navbar/index.scss");
const NavBar = () => {
    const [navbarlinks] = react_1.useState(links_1.default.navbarlinks);
    return (<>    
        <header className="ingenia-header">
            <nav className="ingenia-navbar">
                <link_1.default href="/">
                    <img src="/static/images/logo_ingenia.png" alt="logo_ingenia" width={100}/>
                </link_1.default>{' '}
                <div className="headerlinks-right">
                    {navbarlinks.map((item, i) => <item_1.default key={i} data={item}/>)}
                </div>
            </nav>
        </header>
      </>);
};
exports.default = NavBar;
