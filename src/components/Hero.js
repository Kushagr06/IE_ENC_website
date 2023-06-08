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
    <div className='flex sm:flex-row flex-col mx-2' >

      <div className='flex justify-center flex-col '>
                
                      <div className=' flex items-center text-[8vh] text-center'>
                      Welcome to IE-E&C
                      </div>
                      <div className=' text-[2.5vh] text-center tracking-tight'>
                      We are the official Electroniczs and Communication sclub of Manipal.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni modi repellat illum deleniti consectetur ex obcaecati ipsum repudiandae commodi molestiae sapiente aliquam praesentium fugiat impedit vitae, enim minus eveniet accusantium.
                      </div>
                      
                <div>
                </div>     

      </div>
    <div className='flex justify-center'>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    <div className='-mt-[30vh]'>
    <img src={Dots} alt="....." />
    </div>
    </div>
  );
}

export default Hero
