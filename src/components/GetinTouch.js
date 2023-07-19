import React from 'react';
import Heading from './Heading';
import '../App.css';
// import Wave from 'react-wavify';
import {motion} from 'framer-motion'



function GetinTouch() {
  return (
    <div id="GetinTouch" className='mb-16'>
    <div className='mx-5'>
      <Heading text="Get in Touch" subtext=" Here are our socials, Get in touch with us on..." /> 
    </div>
    <motion.div
         initial={{x:250,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
    <div className='flex xl:flex-row flex-col justify-center align-middle items-center mx-10 sm:my-28 my-14'>
        {/* LinkedIn */}
        
        <div className='container relative  bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary hover:border-highlight h-[40vh] w-[40vh] my-2 duration-200  mx-10  sm:scale-100 scale-[0.80]' id="outerCircle">

          <a href="https://www.linkedin.com/company/ieencmanipal/" target="_blank" rel="noreferrer">
          <svg fill="#907AD6" className=' absolute top-[14%] left-[14%] cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full hover:scale-150 duration-200' viewBox="-806.4 -806.4 3532.80 3532.80" xmlns="http://www.w3.org/2000/svg" stroke="#907AD6"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-806.4" y="-806.4" width="3532.80" height="3532.80" rx="1766.4" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"></path> </g></svg>

          {/* <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      /> */}
       </a>

          </div>

      {/* Instagram */}
          
            <div className=' container mx-10 my-2 bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary hover:border-highlight h-[40vh] w-[40vh] duration-200 relative sm:scale-100 scale-[0.80]' id="outer">

            <a href="https://www.instagram.com/ieenc_manipal/" target="_blank" rel="noreferrer">
          <svg className='cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full absolute top-[14%] left-[14%] hover:scale-150 duration-200' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" id="inner"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#77DDEE" fill-rule="nonzero"></path> </g> </g></svg>


{/* <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      /> */}
      </a>

          </div>
          
            
            {/* Mail */}
       
          <div className='container relative mx-10 my-2 bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary  hover:border-highlight h-[40vh] w-[40vh]  duration-200  sm:scale-100 scale-[0.80]'>

          <a href="mailto:ieenc1718@gmail.com" target="_blank" rel="noreferrer">
          <svg className='absolute top-[15%] left-[15%] cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full hover:scale-[2] duration-200' viewBox="-7.5 -7.5 40.00 40.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-7.5" y="-7.5" width="40.00" height="40.00" rx="20" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2091 5.41992C15.5991 16.0599 8.39906 16.0499 2.78906 5.41992" stroke="#907AD6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1.99023 7.39001V17.39C1.99023 18.4509 2.41166 19.4682 3.1618 20.2184C3.91195 20.9685 4.92937 21.39 5.99023 21.39H17.9902C19.0511 21.39 20.0685 20.9685 20.8186 20.2184C21.5688 19.4682 21.9902 18.4509 21.9902 17.39V7.39001C21.9902 6.32915 21.5688 5.31167 20.8186 4.56152C20.0685 3.81138 19.0511 3.39001 17.9902 3.39001H5.99023C4.92937 3.39001 3.91195 3.81138 3.1618 4.56152C2.41166 5.31167 1.99023 6.32915 1.99023 7.39001Z" stroke="#907AD6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

          {/* <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      /> */}
          </a>

          </div>     
          </div>
          </motion.div>
    </div>
  )
}

export default GetinTouch
