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

      <button className='border-2 border-highlight px-8 py-3 rounded-xl text-highlight
      hover:text-secondary hover:bg-highlight duration-200 hover:scale-110 hover:mx-2 inline-flex font-semibold'> 
      <span>
     <svg fill="#4F518C" width="25px" height="25px" viewBox="0 0 24 24" id="down-trend-left" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21.71,5.29a1,1,0,0,0-1.42,0L13,12.59l-2.29-2.3a1,1,0,0,0-1.42,0L4,15.59V14a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41L10,12.41l2.29,2.3a1,1,0,0,0,1.42,0l8-8A1,1,0,0,0,21.71,5.29Z"></path></g></svg></span>
      Check Out Upcoming Events</button>
      </div>
    <div className='flex justify-center md:mt-0 md:scale-[.90] scale-[0.4] -mt-[30vh] md:-mb-[10vh] -mb-[40vh] '>
      <Banner bannercolor={rectColor} />
      </div>
    </div>
    
    </div>
  );
}

export default Hero
