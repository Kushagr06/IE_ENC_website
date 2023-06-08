import React from 'react'
import { useState, useEffect } from 'react';
import Banner from './Banner';
import Heading from './Heading';

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
    <div>
    <div className='flex xl:flex-row flex-col mx-10 xl:-mt-16' >

      <div className='flex justify-center flex-col text-center items-center overflow-hidden'>

      <Heading text="Welcome to IE-E&C" subtext=" We are the official Electroniczs and Communication sclub of Manipal.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni modi repellat illum deleniti consectetur ex obcaecati ipsum repudiandae commodi molestiae sapiente aliquam praesentium fugiat impedit vitae, enim minus eveniet accusantium." /> 

      </div>
    <div className='flex justify-center md:mt-0 md:scale-[.90] scale-[0.4] -mt-[30vh] '>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    
    </div>
  );
}

export default Hero
