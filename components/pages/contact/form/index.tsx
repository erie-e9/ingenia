import '../../../../public/styles/pages/contact/form/index.scss'
import FormContent from './form-content'
/** *
 * Orange band show contact message
 * Contact form component
* **/ 
const ContactForm: React.FunctionComponent = () => {
    return (
        <>
            <div className="form-wrapper">
                <div className="head-form">
                    <p>Ingenia is located in two major business & goverment hubs in the Americas</p>
                    <h2>Contact us</h2>
                    <p>Send us an e-mail and we will get back to you:</p>
                </div>
                {/* Contact component form to send email to Ingenia. */}
                <FormContent />                
            </div>
        </>
    )
}

export default ContactForm