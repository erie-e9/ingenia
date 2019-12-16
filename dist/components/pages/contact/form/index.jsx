"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../../public/styles/pages/contact/form/index.scss");
const form_content_1 = __importDefault(require("./form-content"));
const ContactForm = () => {
    return (<>
            <div className="form-wrapper">
                <div className="head-form">
                    <p>Ingenia is located in two major business & goverment hubs in the Americas</p>
                    <h2>Contact us</h2>
                    <p>Send us an e-mail and we will get back to you:</p>
                </div>

                <form_content_1.default />                
            </div>
        </>);
};
exports.default = ContactForm;
