import React from 'react'
import { useState, useEffect } from 'react';
import Banner from './Banner';
import Dots from '../assets/dots.svg'

function Hero() {
  const[rectColor, rectColorSet] = useState('#907AD6')
  useEffect(() => {
    if (rectColor === '#907AD6' || rectColor === '#DABFFF') {
        const timeoutID = setTimeout(() => {
            rectColorSet(rectColor === '#907AD6' ? '#DABFFF' : '#907AD6');
        }, 500);
        return () => clearTimeout(timeoutID);
    }
});
  return (
    <div >
    <div className='flex flex-row' >
      <div className='flex justify-center items-center flex-col'>

                <div className=' text-3xl text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates odio quos et, labore sint adipisci quibusdam excepturi perferendis molestias omnis! Voluptatum incidunt enim facilis qui accusantium recusandae voluptate error.
                </div>
                <img src={Dots} alt="....." />

      </div>
    <div>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    </div>
  );
}

export default Hero
