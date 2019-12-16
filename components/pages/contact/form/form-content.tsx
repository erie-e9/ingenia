import { useState } from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'

const FormContent: React.FunctionComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const [ isVerified, setisVerified ]: any  = useState(false)

    // @ts-ignore
    const onSubmit = data => { 
        const dataobj = {
            fullname: `${data.name.replace(/\s/g,'')} ${data.lastname}`,
            email: data.email.replace(/\s/g,''),
            phone: data.phone.replace(/\s/g,''),
            comment: data.comment.trim(),
        }

        console.log('form-data', dataobj);

    // HTTP request POST type to send email usign axios like middleman, 
    // with observables to catch responses

        // axios.post('http://ingenia.com/snippets/test/contact.php', {dataobj})
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        axios({
            method: 'POST',
            url: 'https://ingenia.com/snippets/test/contact.php',
            data: dataobj,
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Content-Type': 'application/json;charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*',
            }
          })
          .then(function (response) {
            console.log('exito we: ', response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    console.log(watch('example'))

    // Function to know current status for Captcha, if is true it'll enable form button

    const handleClick = () => {
        if (!isVerified) {
            alert('Please verify you are human')
            // alert('You have successfully registered like human')
        } 
        // else {
        //     alert('You have successfully registered like human')
        // }
    }

    // specifying your onload callback function
    const callback = function () {
        console.log('ReCaptcha has loaded');
    };
    
    // specifying verify callback function
    const verifyCallback = function (response: any) {
        console.log(response);
        setisVerified(true)
    };

    let recaptchaInstance: any;
 
    // create a reset function
    const resetRecaptcha = () => {
        recaptchaInstance.reset();  
    };

    return (
        <>
            <div className="form-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fiels-wrapper">
                        <div className="form-steps-wrapper">
                            <div className="form-steps"><span>1</span></div>
                            <div className="form-input-wrapper">
                                <input name="name"  ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z ]+([A-Za-z]+)$/i })} className="forms-input-text" type="text" placeholder="Name" autoComplete="off"/>
                                    {errors.name && errors.name.type === 'required' && (<span>This field is required</span>)}
                                    {errors.name && errors.name.type === 'minLength' && (<span>This field require min 3 characters</span>)}
                                    {errors.name && errors.name.type === 'pattern' && (<span>Please insert only letters</span>)}
                            </div>
                            <div className="form-input-wrapper">
                                <input name="lastname"  ref={register({ required: true, minLength: 4, pattern: /^[A-Za-z ]+([A-Za-z]+)+$/i })} className="forms-input-text" type="text" placeholder="Last Name" autoComplete="off"/>
                                    {errors.lastname && errors.lastname.type === 'required' && (<span>This field is required</span>)}
                                    {errors.lastname && errors.lastname.type === 'minLength' && (<span>This field require min 4 characters</span>)}
                                    {errors.lastname && errors.lastname.type === 'pattern' && (<span>Please insert only letters</span>)}
                            </div>
                        </div>
                        <div className="form-steps-wrapper">
                            <div className="form-steps"><span>2</span></div>
                            <div className="form-input-wrapper">
                                <input name="email"  ref={register({ required: true, pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i })} className="forms-input-text" type="text" placeholder="E-mail" autoComplete="off"/>
                                    {errors.email && errors.email.type === 'required' && (<span>This field is required</span>)}
                                    {errors.email && errors.email.type === 'minLength' && (<span>This field require min 5 characters</span>)}
                                    {errors.email && errors.email.type === 'pattern' && (<span>Please insert an email valited</span>)}
                            </div>
                            <div className="form-input-wrapper">
                                <input name="phone" ref={register({ required: true, pattern: /^[0-9]{10}/i })} className="forms-input-text" type="text" placeholder="Phone" autoComplete="off"/>
                                    {errors.phone && errors.phone.type === 'required' && (<span>This field is required</span>)}
                                    {errors.phone && errors.phone.type === 'minLength' && (<span>This field require min 5 characters</span>)}
                                    {errors.phone && errors.phone.type === 'pattern' && (<span>Please insert a phone validated</span>)}
                            </div>
                        </div>
                        <div className="tellus-wrapper">
                            <div className="form-steps-wrapper">
                                <div className="form-steps"><span>3</span></div>
                                <p>Tell us about your challenge or opportunity</p>
                            </div>
                            <div className="form-input-wrapper">
                                <textarea 
                                    ref={register({ required: true, minLength: 5 })}
                                    name="comment"
                                    wrap="hard"
                                    autoComplete="off"
                                    >
                                </textarea>
                                    {errors.comment && errors.comment.type === 'required' && (<span>This field is required</span>)}
                                    {errors.comment && errors.comment.type === 'minLength' && (<span>Please tell us more about your idea</span>)}
                            </div>
                            
                            <br />
                            <div className="form-steps-wrapper">
                                <div className="form-steps"><span>4</span></div>
                                <p>Captcha {"  "}</p>    
                                <Recaptcha
                                    ref={e => recaptchaInstance = e}
                                    // sitekey="6LfS4scUAAAAAHDdoGJqYxi-3_7jmwlrwzbHG1PA"
                                    sitekey="6LeB_8cUAAAAAHLRz5SwWGnsKIOcDyfjLuF4CKC0"
                                    theme="light"
                                    render="explicit"
                                    verifyCallback={verifyCallback}
                                    onloadCallback={callback}
                                />
                            </div>
                            <div className="tellus-button-wrapper">
                                <button className="form-button" onClick={resetRecaptcha}><span>RESET reCAPTCHA</span></button>
                                <button className="form-button" type="submit" onClick={() => handleClick()} disabled={!isVerified}><span>SEND</span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormContent
