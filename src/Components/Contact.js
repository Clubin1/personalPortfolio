import React from 'react'

const Contact = () => {
    return (
        <div>
            <div id="Contact" className="contact">
                <div className="row">
                    <div className="col">
                        <h1 className="contactTitle">Contact Form</h1>
                        <h6 className="contactSub">
                            I’m interested in freelance opportunities – especially ambitious or large projects.<br></br> However, if you have other request or question, don’t hesitate to use the form.


                        </h6>
                    <div id="contact-wrapper">
            <div class="contact-container">
                <form id="con">

                    <fieldset>
                    <input type='hidden' name='contact_number'  />

                    <input name="user_name"  placeholder="Your Name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                    <input name="user_email"  placeholder="Your Email Address" type="email" tabindex="1" required/>
                    </fieldset>
                    <fieldset>
                    <input name="service" placeholder="Service Type" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                    <textarea name="message"  placeholder="Type Your Message Here...." tabindex="5" type="message" required></textarea>
                    </fieldset>
                  <fieldset>
                    <button name="submit" type="submit" className=" contactButton"data-submit="...Sending">Submit a message!</button>
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
