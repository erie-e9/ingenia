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
const react_1 = require("react");
const dynamic_1 = __importDefault(require("next/dynamic"));
require("../../../../public/styles/pages/contact/favoriteplaces/index.scss");
const favoriteplaces_1 = __importDefault(require("../../../../utils/favoriteplaces"));
const DynamicItem = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require("./item"))), { ssr: false,
});
const ContactFavoritePlaces = () => {
    const [favoriteplaces] = react_1.useState(favoriteplaces_1.default.favoriteplaces);
    const [selectedplace, setselectedplace] = react_1.useState("readbook");
    // @ts-ignore
    const handleSelectOptions = (event) => {
        event.preventDefault();
        setselectedplace(event.target.value);
    };
    return (<>
            <div className="favoriteplaces-wrapper">
                <div className="favoriteplaces-head">
                    <p><b>Coming to visit us?</b> Here are some of our favorite places arount town to</p>
                    <div className="favoriteplaces-selector">
                        <select value={selectedplace} onChange={handleSelectOptions}>
                            <option value="readbook">A quiet place to read a book</option>
                            <option value="meetpeople">Meet new people</option>
                            <option value="entertain">Entertain</option>
                            <option value="exercise">Exercise</option>
                            <option value="healthyfood">Eat healthy</option>
                            <option value="shopping">Shopping</option>
                        </select>
                    </div>
                </div>
                {favoriteplaces
        ? <>
                            <div className="countries">
                                <div className="country">
                                    <div className="favoriteplaces-cities">
                                        <span>MEXICO CITY:</span>
                                    </div>
                                    <div className="favoriteplaces-items-wrapper">
                                        {favoriteplaces.map((item) => {
            if (Array.isArray(item[selectedplace])) {
                return (<>
                                                        {item[selectedplace].map((element, i) => {
                    if (element.country === 'Mexico') {
                        return <DynamicItem key={i} data={element}/>;
                    }
                })}
                                                        </>);
            }
        })}
                                    </div>
                                </div>
                            
                                <div className="country">
                                    <div className="favoriteplaces-cities">
                                        <span>WASHINGTON DC:</span>
                                    </div>
                                    <div className="favoriteplaces-items-wrapper">
                                        {favoriteplaces.map((item) => {
            if (Array.isArray(item[selectedplace])) {
                return (<>
                                                        {item[selectedplace].map((element, i) => {
                    if (element.country === 'USA') {
                        return <DynamicItem key={i} data={element}/>;
                    }
                })}
                                                        </>);
            }
        })}
                                    </div>
                                </div>
                            </div>
                        </>
        : null}
            </div>
        </>);
};
exports.default = ContactFavoritePlaces;
