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
    <div>
    <div className='flex xl:flex-row flex-col mx-10' >

      <div className='flex justify-center flex-col text-center items-center overflow-hidden'>
                      <div className='conatiner'>
                            <div>
                          <img src={Dots} alt="....." className='opacity-50 m-0 ml-16 xl:w-[50vw] w-[100vw] h-auto' />
                          </div>
                      <div className=' flex text-[7vh] xl:-mt-[40vh] -mt-[20vh] text-highlight text-right font-semibold'>
                      Welcome to IE-E&C
                      </div>
                      <div className=' text-[2.2vh] text-center tracking-wider'>
                      We are the official Electroniczs and Communication sclub of Manipal.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni modi repellat illum deleniti consectetur ex obcaecati ipsum repudiandae commodi molestiae sapiente aliquam praesentium fugiat impedit vitae, enim minus eveniet accusantium.
                      </div>
                      </div> 
                <div>
                </div>     

      </div>
    <div className='flex justify-center xl:mt-0 xl:scale-[.90] scale-[0.4] -mt-[30vh] '>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    
    </div>
  );
}

export default Hero
