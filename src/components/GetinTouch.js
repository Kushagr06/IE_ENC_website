import React from 'react';
import Heading from './Heading';
import '../App.css'
import Wave from 'react-wavify'


function GetinTouch() {
  return (
    <div id="GetinTouch">
    <div className='mx-5'>
      <Heading text="Get in Touch" subtext=" Here are a few links to help you get in touch with us :)" /> 
    </div>
    <div className='flex xl:flex-row flex-col justify-center align-middle items-center mx-10 sm:my-28 my-14'>

      {/* Instagram */}
          <a href="/insta">
            <div className=' container mx-10 my-2 bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary hover:border-highlight h-[40vh] w-[40vh] duration-200 relative' id="outer">
          <svg className='cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full absolute top-[14%] left-[14%] hover:scale-150 duration-200' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" id="inner"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#77DDEE" fill-rule="nonzero"></path> </g> </g></svg>


<Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      />
          </div>
          </a>
            
            {/* Linktree */}
          <a href="/link">
          <div className='container relative mx-10 my-2 bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary  hover:border-highlight h-[40vh] w-[40vh]  duration-200'>
          <svg className='absolute top-[14%] left-[14%] cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full hover:scale-[2] duration-200' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="inner"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.65 14.77C8.54 15.07 8.25 15.26 7.95 15.26C7.86 15.26 7.78 15.25 7.69 15.21C6.88 14.91 6.2 14.32 5.77 13.55C4.77 11.75 5.39 9.4 7.14 8.31L9.48 6.86C10.34 6.33 11.35 6.17 12.31 6.42C13.27 6.67 14.08 7.3 14.57 8.18C15.57 9.98 14.95 12.33 13.2 13.42L12.94 13.61C12.6 13.85 12.13 13.77 11.89 13.44C11.65 13.1 11.73 12.63 12.06 12.39L12.37 12.17C13.49 11.47 13.87 10.02 13.26 8.91C12.97 8.39 12.5 8.02 11.94 7.87C11.38 7.72 10.79 7.81 10.28 8.13L7.92 9.59C6.84 10.26 6.46 11.71 7.07 12.83C7.32 13.28 7.72 13.63 8.2 13.81C8.59 13.95 8.79 14.38 8.65 14.77ZM16.92 15.65L14.58 17.1C13.99 17.47 13.33 17.65 12.66 17.65C12.36 17.65 12.05 17.61 11.75 17.53C10.79 17.28 9.98 16.65 9.5 15.77C8.5 13.97 9.12 11.62 10.87 10.53L11.13 10.34C11.47 10.1 11.94 10.18 12.18 10.51C12.42 10.85 12.34 11.32 12.01 11.56L11.7 11.78C10.58 12.48 10.2 13.93 10.81 15.04C11.1 15.56 11.57 15.93 12.13 16.08C12.69 16.23 13.28 16.14 13.79 15.82L16.13 14.37C17.21 13.7 17.59 12.25 16.98 11.13C16.73 10.68 16.33 10.33 15.85 10.15C15.46 10.01 15.26 9.58 15.41 9.19C15.55 8.8 15.99 8.6 16.37 8.75C17.18 9.05 17.86 9.64 18.29 10.41C19.28 12.21 18.67 14.56 16.92 15.65Z" fill="#77DDEE"></path> </g></svg>

          <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      />
          </div>
          </a>
        

          {/* LinkedIn */}
          <a href="https://www.svgrepo.com/svg/433541/instagram-f?edit=true">
          <div className='container relative  bg-primary rounded-full overflow-hidden object-center items-center border-8 border-secondary hover:border-highlight h-[40vh] w-[40vh] my-2 duration-200 mx-10' id="outerCircle">
          <svg  id="inner" className=' absolute top-[14%] left-[14%] cursor-pointer h-[27vh] w-[27vh] rounded-full shadow-xl bg-cover max-w-full hover:scale-150 duration-200' fill="#77DDEE" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>

          <Wave
      fill='#DABFFF'
      paused={false}
      options={{
        height:100,
        amplitude:30,
        speed:0.4,
        points:5
      }}
      />
          </div>
          </a>
          </div>
    </div>
  )
}

export default GetinTouch
