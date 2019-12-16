import useForm from 'react-hook-form'
import axios from 'axios'

const FormContent: React.FunctionComponent = () => {    
    const { register, handleSubmit, watch, errors } = useForm()
    
    // @ts-ignore
    const onSubmit = data => { 
        const dataobj = {
            fullname: `${data.name} ${data.lastname}`,
            email: data.email,
            phone: data.phone,
            comment: data.comment,
        }

        console.log('dataform', dataobj);

        // axios.post('http://ingenia.com/snippets/test/contact.php', {dataobj})
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        axios({
            method: 'post',
            url: 'http://ingenia.com/snippets/test/contact.php',
            data: dataobj
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    console.log(watch('example')) 
    return (
        <>
            <div className="form-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fiels-wrapper">
                        <div className="form-steps-wrapper">
                            <div className="form-steps"><span>1</span></div>
                            <div className="form-input-wrapper">
                                <input name="name"  ref={register({ required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })} className="forms-input-text" type="text" placeholder="Name" autoComplete="off"/>
                                    {errors.name && errors.name.type === 'required' && (<span>This field is required</span>)}
                                    {errors.name && errors.name.type === 'minLength' && (<span>This field require min 5 characters</span>)}
                                    {errors.name && errors.name.type === 'pattern' && (<span>Please insert only letters</span>)}
                            </div>
                            <div className="form-input-wrapper">
                                <input name="lastname"  ref={register({ required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })} className="forms-input-text" type="text" placeholder="Last Name" autoComplete="off"/>
                                    {errors.lastname && errors.lastname.type === 'required' && (<span>This field is required</span>)}
                                    {errors.lastname && errors.lastname.type === 'minLength' && (<span>This field require min 5 characters</span>)}
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
                            {/* <div className="form-steps-wrapper">
                                <div className="form-steps"><span>4</span></div>
                                <p>Captcha</p>
                                <input className="forms-input-text" type="text" />
                            </div> */}
                            <div className="tellus-button-wrapper">
                                <button className="form-button" type="submit"><span>SEND</span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormContent
