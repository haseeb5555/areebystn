import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center ' id='about'>
   <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt="g" />

   </div>
   <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
       <h1 className='headtext__cormorant'>About Us</h1>
       <img src={images.spoon} alt="spoon"  className='spoon__img'/>
       <p className='p__opensans'> ‘Areebystn’ Restaurants are well known with a substantial gathering of people, including families, kids, seniors, and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch, or assembling for a flavorful dinner with loved ones.</p>
       <button type='button'  className='custom__button'>Know Me</button>
    </div>
    <div className='app__aboutus-content_knife flex__center'>
   <img src={images.knife} alt="knife" />
    </div>
    <div className='app__aboutus-content_history'>
       <h1 className='headtext__cormorant'>Our History</h1>
       <img src={images.spoon} alt="spoon"  className='spoon__img'/>
       <p className='p__opensans'> ‘Areebystn’ Restaurants are well known with a substantial gathering of people, including families, kids, seniors, and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch, or assembling for a flavorful dinner with loved ones.</p>
       <button type='button'  className='custom__button'>Know Me</button>
    </div> 

        
   </div>
  </div>
);

export default AboutUs;
