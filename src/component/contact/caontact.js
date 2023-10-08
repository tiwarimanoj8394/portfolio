// we will be using emainjs lib to automate email
import React, { useRef } from 'react'
import './contact.css'
import Client1 from '../../assets/walmart.png'
import Client2 from '../../assets/microsoft.png'
import Client3 from '../../assets/facebook.png'
import Client4 from '../../assets/adobe.png'
import facebook from '../../assets/facebook2.png'
import insta from '../../assets/insta3.png'
import linkdin from '../../assets/linkedin.png'
import git from '../../assets/git.png'
//use emailjs to automate emails
import emailjs from '@emailjs/browser';

const Contact = () => {

    /* email js */
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mzuuig7', 'template_m09331v', form.current, 'tiYPPlqJvAcEg8fQ7Jwqg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
        /* the send form provided by the emailjs returns the promise on complition */

  return (
    <section id='contactpage'>
        <div className="clients">
            <h1 className='contactTitle'>My Clients</h1>
            <p className="clientdesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente necessitatibus nobis cupiditate vero, sequi repellendus fuga perspiciatis eveniet eligendi?
            </p>
            <div className="clientimgs">
                <img src={Client1} alt="client1"  className='clientimg'/>
                <img src={Client2} alt="client2"  className='clientimg'/>
                <img src={Client3} alt="client3"  className='clientimg'/>
                <img src={Client4} alt="client4"  className='clientimg'/>
            </div>
        </div>
        <div className="contactpage">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactdesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </span>

                {/* form /////////////////////////////////////////// */}
                
                <form  ref={form} className='contactForm' onSubmit={sendEmail}>
                    <input type="text" placeholder='Enter Your Name' className="name" name="user_name"  />
                    <input type='email' placeholder='Enter Your Email' className="email" name="user_email" />
                    <textarea name="message"  className='msg' id="" cols="20" rows="8"></textarea>
                    <button className="submitbtn">Submit</button>
                    {/* icons  */}
                    <div className="links">
                        <img src={facebook} alt="facebook" className="link" />
                        <img src={insta} alt="insta" className="link" />
                        <img src={linkdin} alt="linkdin" className="link"/>
                        <img src={git}t alt="git" className="link"/>
                    </div>
                </form>
        </div>
    </section>
  )
}

export default Contact

/*
go to the email js website and  get the necessary strings */