import React from 'react';
import images from '../../constants/images'

import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div   className='app__header app__wrapper section__padding ' id='home'>  
    <div className='app__header_info'>
   <SubHeading title="Chase the new flavour"/>
   <h1 className='app__header-h1'> The Key to Fine Dining</h1>
   <p className='p__opensans' style={{margin:"2rem 0"}}>and Founder of World Central Kitchen.“There are people with otherwise chaotic and disorganized lives</p>
   <button className='custom__button'> Explore Menu</button>
    </div>
    <div className='app__header_img'>
    <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
