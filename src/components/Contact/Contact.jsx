import React from "react";
import "./Contact.css"
function Contact(){
    return(
        <div className="contact-content">
           <div className="heading">
              <h1>Contact Barista Factory</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, enim veritatis! 
                     Impedit, ea hic. Neque voluptatum sint aliquam vel! Dignissimos unde temporibus 
                     aliquid ipsum eum eligendi
              </p>
            </div>

        <div className="contact-container">
            
                <div className="contact-image">
                   <img src="contactus.jpg" alt="" />
                </div>
                <div className="contact-content2">
                    <h2>Let's Get in Touch</h2>
                    <form action="">
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="Jon Doe" />
                            </div>

                            <div className="input-group">
                                <label>Mobile</label>
                                <input type="number" placeholder="01625889977" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="name@gmail.com" />
                            </div>

                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Write your subject" />
                            </div>
                        </div>

                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Your message" ></textarea>
                        
                        <button className="contact-button" type="submit">SEND</button>
                    </form>
                </div>
            
        </div>

    </div>  
    )
}

export default Contact;