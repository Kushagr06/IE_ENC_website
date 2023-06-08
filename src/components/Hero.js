import React from 'react'
import { useState, useEffect } from 'react';
import Banner from './Banner';

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
    <div className='bg-background' >
  <Banner bannercolor={rectColor} />
    </div>
  );
}

export default Hero
