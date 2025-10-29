import React from 'react'
import './Mywork.css';
import Theme_Pattern from '../../assets/theme.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
        <img src={Theme_Pattern} alt='theme' />
      </div>
      <div className='mywork-container'>
        { mywork_data.map((work, index) =>{
          return (
  <a 
    key={index} 
    href={work.link} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={work.w_img} alt={work.w_name} />
  </a>
);

        }) }
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='arrow-icon' />
      </div>
    </div>
  )
}

export default Mywork