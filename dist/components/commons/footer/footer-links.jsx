"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
const links_1 = __importDefault(require("../../../utils/links"));
const FooterLinks = () => {
    const [footerlinks, setfooterlinks] = react_1.useState();
    const [socialnetwork_twitter, setsocialnetwork_twitter] = react_1.useState(false);
    const [socialnetwork_facebook, setsocialnetwork_facebook] = react_1.useState(false);
    const [socialnetwork_youtube, setsocialnetwork_youtube] = react_1.useState(false);
    const [socialnetwork_linkedln, setsocialnetwork_linkedln] = react_1.useState(false);
    react_1.useEffect(() => {
        setfooterlinks(links_1.default.footerlinks);
    });
    return (<>
        {footerlinks
        ? <div className="footer-content-right">
                    <nav>
                        {footerlinks.map((item, i) => {
            return (<link_1.default key={i} href={item.link}>
                                        <span className="footerlink">{item.section}</span>
                                    </link_1.default>);
        })}              
                    </nav>
                    <div className="footer-content-sublinks">
                        <link_1.default href="/contact">
                            <span className="footersublink test-three-shaking">Terms of use</span>
                        </link_1.default>
                        <link_1.default href="/contact">
                            <span className="footersublink test-three-shaking">Privacy Policy</span>
                        </link_1.default>
                    </div>
                    <div className="socialnetworks-wrapper">
                        <div className="socialnetwork-twitter" onMouseOver={() => setsocialnetwork_twitter(true)} onMouseOut={() => setsocialnetwork_twitter(false)} id={socialnetwork_twitter ? "socialnetwork-twitter-hover" : "socialnetwork-twitter"}></div>
                        <div className="socialnetwork-facebook" onMouseOver={() => setsocialnetwork_facebook(true)} onMouseOut={() => setsocialnetwork_facebook(false)} id={socialnetwork_facebook ? "socialnetwork-facebook-hover" : "socialnetwork-facebook"}></div>
                        <div className="socialnetwork-youtube" onMouseOver={() => setsocialnetwork_youtube(true)} onMouseOut={() => setsocialnetwork_youtube(false)} id={socialnetwork_youtube ? "socialnetwork-youtube-hover" : "socialnetwork-youtube"}></div>
                        <div className="socialnetwork-linkedln" onMouseOver={() => setsocialnetwork_linkedln(true)} onMouseOut={() => setsocialnetwork_linkedln(false)} id={socialnetwork_linkedln ? "socialnetwork-linkedln-hover" : "socialnetwork-linkedln"}></div>
                    </div>
                </div>
        : null}
        </>);
};
exports.default = FooterLinks;
