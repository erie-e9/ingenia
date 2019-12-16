"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ListDetail = ({ item: user, }) => (<div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>);
exports.default = ListDetail;
