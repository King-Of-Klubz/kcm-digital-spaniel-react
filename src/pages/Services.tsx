import React, { useState } from 'react';
import '../css/pages/Services.css'
import HomeImage from '../assets/Spaniel01_gradient.png'

export const Services = () => {

  return (
    <>
      <div className='container'>
        <div className='columns'>
          <div className='title-col'>
            <h3>BRAND, DEV, ECOM, MARKETING</h3>
            <h1>We unleash </h1>
            <h2>business potential</h2>
            <p>We create brand experiences which are
              memorable and distinct. Our experienced
              team create and develop brands with personality and
              resonance.</p>
          </div>
          <div className='image-col'>
            <img src={HomeImage} />
          </div>
        </div>
      </div>
    </>
  );
}
