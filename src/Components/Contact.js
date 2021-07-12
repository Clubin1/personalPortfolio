import React, {useState} from 'react'

import {useForm} from 'react-hook-form';
import {init, sendForm} from 'emailjs-com';
const {REACT_APP_EMAIL_FORM_KEY} = process.env;

init(`user_EJB0UvP229Yp1EqevHUIz`);

const Contact = () => {

    const {register, handleSubmit} = useForm();
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");

    console.log(REACT_APP_EMAIL_FORM_KEY)
    const generateContactNumber = () => {
        const numStr = "000000" + (
            Math.random() * 1000000 | 0
        );
        setContactNumber(numStr.substring(numStr.length - 6));
    }
    const onSubmit = (data) => {
        const form = document.querySelector('#con')
        console.log(data);
        generateContactNumber();
        sendForm('default_service', 'template_wh39fjb', '#con').then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            form.reset();
            setStatusMessage("Message sent!");
            setTimeout(() => {}, 5000)
        }, function (error) {
            console.log('FAILED...', error);
            setStatusMessage("Failed to send message! Please try again later.");
            setTimeout(() => {}, 5000)
        });
    }
    return (
        <div>
            <div id="Contact" className="contact">
                <div className="row">
                    <div className="col">
                        <h1 className="contactTitle">Contact Form</h1>
                        <h6 className="contactSub">
                            I’m interested in freelance opportunities – especially ambitious or large projects.<br></br>
                            However, if you have other request or question, don’t hesitate to use the form.


                        </h6>
                        <div id="contact-wrapper">
                            <div class="contact-container">
                                <form onSubmit={
                                        handleSubmit(onSubmit)
                                    }
                                    id="con">
                                    <h6 className='status-message'>
                                        {statusMessage}</h6>

                                    <fieldset>
                                        <input type='hidden' name='contact_number'
                                            value={contactNumber}/>

                                        <input name="user_name" {...register("user_name")} placeholder="Your name" type="text" tabindex="1" required autofocus/>
                                    </fieldset>
                                    <fieldset>
                                        <input name="user_email" {...register("user_email")} placeholder="Your Email Address" type="email" tabindex="2" required/>
                                    </fieldset>
                                    <fieldset>
                                        <textarea name="message" {...register("message")} placeholder="Type your message here...." tabindex="5" type="message" required></textarea>
                                    </fieldset>
                                    <fieldset>
                                        <button name="submit" type="submit" className=" contactButton" data-submit="...Sending">Submit a message!</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
