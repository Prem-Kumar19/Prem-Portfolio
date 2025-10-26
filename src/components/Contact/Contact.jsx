import React, { useState } from 'react'
import './Contact.css';
import Theme_Pattern from '../../assets/theme.svg';
import Mail_Icon from '../../assets/mail_icon.svg';
import Call_Icon from '../../assets/call_icon.svg';
import Location_Icon from '../../assets/location_icon.svg';


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "cee0f5af-75e6-4664-af7d-2a36149580cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={Theme_Pattern} alt='theme' />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I’m always excited to work on new projects and collaborate with creative minds. Whether you’re looking for a web developer, a teammate, or just want to discuss an idea — feel free to reach out!</p>
                <p>I’m currently open to freelance projects, internships, and placement opportunities where I can contribute, learn, and grow.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={Mail_Icon} alt='mail-icon' />
                        <p>premkum1710@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={Call_Icon} alt='call-icon' />
                        <p>+91 9631121169</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={Location_Icon} alt='location-icon' />
                        <p>Patna, Bihar, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name'></input>
                 <label htmlFor=''>Your Email</label>
                <input type='email' name='email' placeholder='Enter your email'></input>
                 <label htmlFor=''>Write your messsage here</label>
                 <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                 <button type='submit' className='contact-submit'>Submit now</button>
                   <p className='contact-result'>{result}</p>
            </form>
        </div>
    </div>
  )
}

export default Contact