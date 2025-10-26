import React from 'react'
import './Hero.css';
import Profile_img from '../../assets/Prem.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Profile_img} alt='profile' />
        <h1><span>I'm Prem Kumar,</span> Mernstack developer based in India</h1>
        <p>Motivated and curious Computer Science student with hands-on experience in full-stack web development. Passionate about building scalable web applications using modern frameworks like React.js and Node.js. Seeking a remote full-stack developer internship to apply and enhance my skills through real-world project experience.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connecct with me</AnchorLink></div>
             <a className='hero-resume'
              href="https://drive.google.com/file/d/1Lvyltr7llzAm34_vTlSyMffvDgVN2sTu/view?usp=drivesdk "
              target="_blank"
              rel="noopener noreferrer"
            >My resume</a>
        </div>
    </div>
  )
}

export default Hero