"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ContactFavoritePlaces = ({ data }) => {
    const [propdata, setpropdata] = react_1.useState();
    react_1.useEffect(() => {
        setpropdata(data);
    });
    return (<>
            {propdata
        ? <>
                        <div className="favoriteplace-item-wrapper" style={{ textAlign: propdata.country === 'Mexico' ? 'end' : 'start', alignItems: propdata.country === 'Mexico' ? 'flex-end' : 'flex-start' }}>
                            <div className="favoriteplace-item-head">
                                {propdata.country === 'Mexico'
            ? <>
                                            <a href={propdata.link} target="_blank" rel="noopener noreferrer"><p>{propdata.name}</p></a>
                                            <div className="favoriteplace-item-icon" id="favoriteplace-item-icon"></div>
                                        </>
            : <>
                                            <div className="favoriteplace-item-icon" id="favoriteplace-item-icon"></div>
                                            <a href={propdata.link} target="_blank" rel="noopener noreferrer"><p>{propdata.name}</p></a>
                                        </>}
                            </div>
                            <span>{propdata.ubication} {propdata.country}</span>
                            <span>{propdata.info}</span>
                        </div> 
                    </>
        : null}
        </>);
};
exports.default = ContactFavoritePlaces;
