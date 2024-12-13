import React from 'react'
import { useState, useEffect } from 'react';
import Banner from './Banner';
import Heading from './Heading';
import Wave from 'react-wavify'
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';




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
    <div id="hero" className='w-auto xl:h-screen xl:relative '>
    <div className='flex xl:flex-row flex-col-reverse mx-5 xl:-mt-12' >

      <div className='flex justify-center flex-col text-center items-center overflow-hidden relative '>
      <motion.div
      className='z-10'
         variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0},
         }}
         initial="hidden"
         animate="visible"
         transition={{duration:0.5, delay:0.25}}
        > 
      <Heading text="Welcome to IE-E&C" subtext="The Official Electronics and Communication Student Club of Manipal Institute of Technology, Manipal! Established in 2011, we take great pride in being the hub for all things electronics and communication-related on campus. Whether you're a passionate tech enthusiast, a budding engineer, or simply interested in exploring the exciting world of electronics, you've come to the right place." /> 
      
         {/* Events Button */}
         <Link to="Upcoming" spy={true} smooth={true} offset={-70} duration={500} className="inline-flex">
      <button className='border-2 border-highlight px-8 py-3 rounded-xl text-highlight
      hover:text-secondary hover:bg-highlight duration-200 hover:scale-110 hover:mx-1 font-semibold mt-2 fill-highlight hover:fill-secondary z-10 '> 
      
     <svg  width="25px" height="25px" viewBox="0 0 24 24" id="down-trend-left" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color inline-flex mx-1" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21.71,5.29a1,1,0,0,0-1.42,0L13,12.59l-2.29-2.3a1,1,0,0,0-1.42,0L4,15.59V14a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41L10,12.41l2.29,2.3a1,1,0,0,0,1.42,0l8-8A1,1,0,0,0,21.71,5.29Z"></path></g></svg>
      <span>Check Out Upcoming Events</span>
      </button>
      </Link>
      </motion.div>
      </div>
      <motion.div
       className='z-10'
         initial={{x:0,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:2}}}
         viewport={{ once: true }}
        > 

        {/* MainImage */}
    <div className='flex justify-center sm:-mt-10 sm:scale-[.85] scale-[0.5] -mt-[28vh] sm:-mb-[10vh] -mb-[29.5vh] z-10'>
      <Banner bannercolor={rectColor}  />
      </div>
      </motion.div>
    </div>
    <div className=' w-full xl:absolute xl:bottom-0 -mt-12 opacity-[0.75]'>
      {/* SemiTransparentWave */}
      <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:90,
        amplitude:70,
        speed:0.4,
        points:4
      }}
      />
      </div> 
    </div>
  );
}

export default Hero
