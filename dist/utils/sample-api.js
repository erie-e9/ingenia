"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
async function sampleFetchWrapper(input, init) {
    try {
        const data = await isomorphic_unfetch_1.default(input, init).then(res => res.json());
        return data;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.sampleFetchWrapper = sampleFetchWrapper;
