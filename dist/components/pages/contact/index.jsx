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
const DynamicContactForm = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./form"))), { ssr: false,
});
const DynamicContactLocations = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./locations"))), { ssr: false,
});
const ContactFavoritePlaces = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./favoriteplaces"))), { ssr: false,
});
const IndexContact = () => {
    return (<>
            <DynamicContactLocations />
            <DynamicContactForm />
            <ContactFavoritePlaces />
        </>);
};
exports.default = IndexContact;
