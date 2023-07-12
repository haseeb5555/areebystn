import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper-info'>
 <SubHeading title='chef`s word'/>
    <h1 className='headtext__cormorant'>What we believe in</h1>

    <div className='app__chef-content'>
    <div  className='app__chef-content_qoute'>
     <img src={images.quote} alt="qoute" />
     <p  className='p__opensans'> our skilled chefs who breathe life into the world of culinary art and architexture. </p>
    </div>
    <p className='p__opensans'>
    With years of experience and a passion for gastronomy,
    performing good every year
     
    </p>
    </div>
    <div className='app__chef-sign'>
    <p >Furqan Khalid</p>
    <p className='p__opensans'>Chef & Founder</p>
    </div>
    </div>
  </div>
);

export default Chef;
