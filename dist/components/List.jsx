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
const ListItem_1 = __importDefault(require("./ListItem"));
const List = ({ items }) => (<ul>
    {items.map(item => (<li key={item.id}>
        <ListItem_1.default data={item}/>
      </li>))}
  </ul>);
exports.default = List;
