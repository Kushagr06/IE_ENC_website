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
    <div className='h-screen'>
    <div className='flex xl:flex-row flex-col mx-2' >

      <div className='flex justify-center flex-col text-center '>
                            <div>
                          <img src={Dots} alt="....." className='opacity-50 m-0 ml-16' />
                          </div>
                      <div className=' flex text-[8vh] -mt-[40vh] text-highlight text-right'>
                      Welcome to IE-E&C
                      </div>
                      <div className=' text-[2.5vh] text-center tracking-tight'>
                      We are the official Electroniczs and Communication sclub of Manipal.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni modi repellat illum deleniti consectetur ex obcaecati ipsum repudiandae commodi molestiae sapiente aliquam praesentium fugiat impedit vitae, enim minus eveniet accusantium.
                      </div>
                      
                <div>
                </div>     

      </div>
    <div className='flex justify-start sm:mt-0 sm:scale-[.90] scale-[0.5] -mt-[20vh]'>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    
    </div>
  );
}

export default Hero
