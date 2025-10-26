import React from 'react'
import './Footer.css';
import Footer_Logo from '../../assets/Prem-logo.png';
import User_Icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={Footer_Logo} alt='footer_logo' />
                <p>I'm a Mernstack developer based in India</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={User_Icon} alt='footer-email-input' />
                    <input type='email' placeholder='Enter your email'></input>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>@ 2025 Prem Kumar. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer