import React from 'react'
import axios from 'axios';
import NoEvent from '../assets/noEvents.svg'


function EventCards() {

  const baseURL='https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/events'
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    })
    .catch(error =>console.log(error.message));
  }, []);
  return (
    
    <div className='flex justify-center md:flex-row flex-col flex-wrap items-center align-middle m-2'>    
 {
 data.length===0?
// Image Appears if no Event is available in the database.
 <div className='flex justify-center flex-col -mt-16 sm:mt-0'>
 <img src={NoEvent} alt="Checkback soon for more Events :)" />
 <div className=' text-xl mx-5 font-custom text-highlight -mt-6 text-center flex flex-wrap justify-center font-semibold'>
    Checkback Later for Upcoming Events!!
 </div>
 </div>
 :
//  Data is mapped if available
 data.map((data)=>(       
//     <>
    
//   <div className='container w-[24rem] h-auto bg-secondary rounded-2xl border-4 border-primary sm:scale-100 scale-[0.85] sm:m-5' key={data.id}> 
//     <div className='flex flex-row justify-center'>
//      {/* Date */}
//      <div className=' p-0 mx-0 my-auto font-headingFont font-light align-middle'>
//     <div className=' text-[4vh] -rotate-90 text-highlight '>
//     {data.date}
//     </div>
//    </div>
    
//    {/* pic */}
//    <div className='top-0 left-0 w-44 h-44 bg-primary rounded-full ml-2 mt-2 mr-2 border-2 border-highlight z-10 overflow-hidden object-center relative'>
//    <img src={`https://drive.google.com/uc?export=view&id=`+data.image} alt="Pic" className='w-auto bg-cover max-w-full absolute top-[0%] left-[0%]'/>

//    </div>
//      <div className='flex flex-col'>
//        <button>
//         {/* Instagram */}
//         {
//        data.instaLink?
//        <a href={data.instaLink}>
//        <svg className='m-2 mt-8 cursor-pointer hover:scale-110 duration-200 fill-highlight' width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#77DDEE" fill-rule="nonzero"></path> </g> </g></svg>
//        </a>
//        :""
//         }
//        </button>
//        <button>
//         {/* Form  Join button*/}
//         {
//           data.formLink?
//        <a href={data.formLink}>
//        <svg className='m-2 mt-4 cursor-pointer hover:scale-110 duration-200 fill-highlight' width="60px" height="60px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#77DDEE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus_circle [#77DDEE]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -600.000000)" fill="#77DDEE"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440" id="plus_circle-[#77DDEE]"> </path> </g> </g> </g> </g></svg>
//        </a>
//        :""
//         }
//        </button>
//    </div>
   
//    </div>
//    <div className='flex flex-row'>
   
//    {/* name&description */}
//    <div className='top-0 left-0 w-[21rem] h-auto bg-primary rounded-2xl ml-2 mt-2 py-1 text-highlight font-custom font-semibold text-lg overflow-auto text-center flex justify-center mb-2 px-2 '>
//     <span className=' font-semibold tracking-wide'>
//      {data.name}&nbsp;
//      </span>
//      <span className='text-secondary font-regular'>&nbsp;{data.description}</span>
//    </div>
//    </div>
 
//  </div>
//  </>




//NEWCARD COMPONENT
<>
{/* Card */}
<div className='container h-[25rem] lg:w-1/5 md:w-1/3 w-3/4 bg-secondary rounded-2xl border-4 border-primary sm:scale-100 scale-[0.85]  sm:m-10 p-5 flex flex-col justify-center' key={data.id}> 
    {/* image */}
    <img src={`https://drive.google.com/uc?export=view&id=`+data.image} alt=" " className='w-full  bg-cover  max-w-full rounded-b-[6rem] relative -top-6 rounded-t-2xl shadow-md shadow-background'/>
    {/* Join Link */}
    {
        data.formLink?
        <a href={data.formLink} target='_blank' rel="noreferrer">
        <button className=' h-16 w-16 rounded-full 
           bg-highlight duration-200 hover:scale-110 hover:my-1 font-semibold mt-2 z-10 relative bottom-28 text-2xl shadow-md lg:left-[13vw] md:left-[22vw] left-[45vw] shadow-background content-center flex justify-center items-center'> 
            <svg width="25px" height="25px" className='fill-secondary' viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path class="st0" d="M132.56,54.6c-19.51,18.23-30.25,43.18-30.25,70.28c0,26.7,10.17,54.87,27.92,77.28 c19.77,24.98,45.62,38.74,72.79,38.74s53.02-13.76,72.79-38.74c17.74-22.42,27.92-50.59,27.92-77.28 c0-27.1-10.74-52.05-30.25-70.28c-18.71-17.48-43.73-27.1-70.45-27.1S151.26,37.13,132.56,54.6z M271.71,124.88 c0,38.06-30.65,84.02-68.7,84.02s-68.7-45.96-68.7-84.02c0-18.13,7.14-34.79,20.1-46.9c12.76-11.92,30.02-18.49,48.6-18.49 s35.84,6.57,48.6,18.49C264.57,90.09,271.71,106.75,271.71,124.88z"></path> <path class="st0" d="M373.27,284.57c-11.18,0-22.01,1.8-32.36,5.36c-3.3-3.78-6.89-7.42-10.76-10.88 c-8.47-7.59-18.2-14.29-28.91-19.92c-5.28-2.78-10.93-5.36-16.81-7.67c-4.64-1.82-9.86-1.38-14.12,1.2 c-20.83,12.58-44.1,19.23-67.31,19.23s-46.48-6.65-67.31-19.23c-4.26-2.57-9.48-3.02-14.11-1.2c-5.85,2.29-11.5,4.87-16.8,7.66 c-24.5,12.87-43.83,31.52-54.44,52.51c-10.38,20.53-13.72,45.13-10.19,75.21c3.86,32.96,8.97,61.02,15.61,85.79 c1.88,6.99,8.21,11.86,15.45,11.86H334.8c3.98,0,7.68-1.47,10.52-3.96c9.02,2.63,18.37,3.96,27.95,3.96 c55.12,0,99.96-44.84,99.96-99.96C473.23,329.42,428.39,284.57,373.27,284.57z M83.68,452.5c-4.81-20.35-8.68-43.18-11.75-69.37 c-2.81-23.98-0.59-42.1,6.97-57.06c7.63-15.11,22.11-28.82,40.77-38.63c2.16-1.14,4.39-2.23,6.68-3.27 c23.95,12.92,50.28,19.72,76.64,19.72c26.36,0,52.69-6.79,76.64-19.71c2.3,1.05,4.54,2.14,6.7,3.28 c8.39,4.41,15.95,9.6,22.48,15.46c1.01,0.9,2,1.82,2.96,2.75c-0.18,0.14-0.36,0.29-0.54,0.43c-0.3,0.24-0.6,0.48-0.9,0.72 c-0.55,0.45-1.1,0.9-1.64,1.35c-0.29,0.24-0.57,0.48-0.86,0.73c-0.59,0.51-1.17,1.02-1.75,1.54c-0.21,0.19-0.43,0.38-0.64,0.58 c-0.78,0.72-1.56,1.45-2.32,2.19c-0.11,0.11-0.23,0.23-0.34,0.34c-0.64,0.63-1.27,1.27-1.89,1.92c-0.24,0.25-0.47,0.5-0.71,0.75 c-0.5,0.53-0.99,1.06-1.47,1.6c-0.25,0.28-0.5,0.55-0.74,0.83c-0.48,0.54-0.95,1.09-1.41,1.64c-0.22,0.26-0.44,0.53-0.66,0.79 c-0.55,0.67-1.09,1.35-1.63,2.04c-0.11,0.15-0.23,0.29-0.34,0.44c-0.65,0.84-1.28,1.69-1.9,2.55c-0.15,0.2-0.29,0.41-0.43,0.62 c-0.47,0.66-0.92,1.32-1.37,1.98c-0.2,0.29-0.39,0.58-0.58,0.88c-0.39,0.6-0.78,1.2-1.17,1.81c-0.19,0.31-0.38,0.61-0.57,0.92 c-0.39,0.64-0.77,1.28-1.15,1.93c-0.16,0.27-0.31,0.53-0.47,0.8c-1.04,1.83-2.03,3.7-2.95,5.6c-0.13,0.27-0.26,0.55-0.39,0.83 c-0.32,0.68-0.64,1.37-0.95,2.06c-0.15,0.33-0.29,0.67-0.44,1c-0.29,0.66-0.56,1.32-0.83,1.98c-0.14,0.33-0.27,0.66-0.4,0.99 c-0.29,0.74-0.57,1.48-0.85,2.22c-0.09,0.25-0.19,0.5-0.28,0.76c-0.36,1-0.71,2.01-1.03,3.02c-0.05,0.16-0.1,0.32-0.15,0.48 c-0.27,0.85-0.53,1.7-0.78,2.56c-0.1,0.33-0.19,0.67-0.28,1c-0.19,0.7-0.38,1.4-0.56,2.1c-0.09,0.37-0.19,0.74-0.27,1.11 c-0.17,0.7-0.33,1.41-0.49,2.11c-0.08,0.35-0.15,0.69-0.23,1.04c-0.18,0.85-0.34,1.71-0.5,2.57c-0.04,0.2-0.08,0.39-0.11,0.59 c-0.18,1.06-0.35,2.12-0.5,3.19c-0.04,0.28-0.07,0.57-0.11,0.85c-0.1,0.79-0.2,1.57-0.29,2.36c-0.04,0.38-0.08,0.76-0.11,1.15 c-0.07,0.71-0.13,1.43-0.19,2.14c-0.03,0.39-0.06,0.79-0.08,1.18c-0.05,0.75-0.09,1.5-0.12,2.26c-0.01,0.34-0.03,0.69-0.04,1.03 c-0.04,1.09-0.06,2.19-0.06,3.29c0,19.18,5.46,37.83,15.77,53.91c0.73,1.14,1.49,2.26,2.27,3.37c0.23,0.33,0.48,0.66,0.71,0.99 c0.56,0.79,1.14,1.56,1.73,2.33c0.27,0.35,0.54,0.7,0.81,1.05c0.64,0.82,1.3,1.62,1.96,2.42c0.2,0.24,0.4,0.49,0.61,0.73 c0.87,1.02,1.76,2.03,2.67,3.01c0.04,0.05,0.08,0.1,0.13,0.14H83.68z M373.27,452.5c-10.31,0-20.21-2.25-29.42-6.68 c-23.42-11.26-38.55-35.32-38.55-61.28c0-1.62,0.06-3.23,0.17-4.83c1.67-23.97,15.7-45.14,37.47-56.01 c9.45-4.73,19.66-7.13,30.33-7.13c37.47,0,67.96,30.49,67.96,67.97C441.23,422.01,410.74,452.5,373.27,452.5z"></path> <path class="st0" d="M399.2,368.54h-9.93v-9.93c0-8.84-7.16-16-16-16s-16,7.16-16,16v9.93h-9.93c-8.84,0-16,7.16-16,16 s7.16,16,16,16h9.93v9.93c0,8.84,7.16,16,16,16s16-7.16,16-16v-9.93h9.93c8.84,0,16-7.16,16-16S408.03,368.54,399.2,368.54z"></path> </g> </g> </g></svg> 
          </button>
          </a>:
          <a href={data.formLink} target='_blank' rel="noreferrer">
          <button type='button' className=' opacity-0 h-16 w-16 rounded-full 
             bg-highlight duration-200 hover:scale-110 hover:my-1 font-semibold mt-2 z-10 relative bottom-28 text-2xl shadow-md lg:left-[13vw] md:left-[22vw] left-[45vw] shadow-background content-center flex justify-center items-center' disabled> 
              <svg width="25px" height="25px" className='fill-secondary' viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path class="st0" d="M132.56,54.6c-19.51,18.23-30.25,43.18-30.25,70.28c0,26.7,10.17,54.87,27.92,77.28 c19.77,24.98,45.62,38.74,72.79,38.74s53.02-13.76,72.79-38.74c17.74-22.42,27.92-50.59,27.92-77.28 c0-27.1-10.74-52.05-30.25-70.28c-18.71-17.48-43.73-27.1-70.45-27.1S151.26,37.13,132.56,54.6z M271.71,124.88 c0,38.06-30.65,84.02-68.7,84.02s-68.7-45.96-68.7-84.02c0-18.13,7.14-34.79,20.1-46.9c12.76-11.92,30.02-18.49,48.6-18.49 s35.84,6.57,48.6,18.49C264.57,90.09,271.71,106.75,271.71,124.88z"></path> <path class="st0" d="M373.27,284.57c-11.18,0-22.01,1.8-32.36,5.36c-3.3-3.78-6.89-7.42-10.76-10.88 c-8.47-7.59-18.2-14.29-28.91-19.92c-5.28-2.78-10.93-5.36-16.81-7.67c-4.64-1.82-9.86-1.38-14.12,1.2 c-20.83,12.58-44.1,19.23-67.31,19.23s-46.48-6.65-67.31-19.23c-4.26-2.57-9.48-3.02-14.11-1.2c-5.85,2.29-11.5,4.87-16.8,7.66 c-24.5,12.87-43.83,31.52-54.44,52.51c-10.38,20.53-13.72,45.13-10.19,75.21c3.86,32.96,8.97,61.02,15.61,85.79 c1.88,6.99,8.21,11.86,15.45,11.86H334.8c3.98,0,7.68-1.47,10.52-3.96c9.02,2.63,18.37,3.96,27.95,3.96 c55.12,0,99.96-44.84,99.96-99.96C473.23,329.42,428.39,284.57,373.27,284.57z M83.68,452.5c-4.81-20.35-8.68-43.18-11.75-69.37 c-2.81-23.98-0.59-42.1,6.97-57.06c7.63-15.11,22.11-28.82,40.77-38.63c2.16-1.14,4.39-2.23,6.68-3.27 c23.95,12.92,50.28,19.72,76.64,19.72c26.36,0,52.69-6.79,76.64-19.71c2.3,1.05,4.54,2.14,6.7,3.28 c8.39,4.41,15.95,9.6,22.48,15.46c1.01,0.9,2,1.82,2.96,2.75c-0.18,0.14-0.36,0.29-0.54,0.43c-0.3,0.24-0.6,0.48-0.9,0.72 c-0.55,0.45-1.1,0.9-1.64,1.35c-0.29,0.24-0.57,0.48-0.86,0.73c-0.59,0.51-1.17,1.02-1.75,1.54c-0.21,0.19-0.43,0.38-0.64,0.58 c-0.78,0.72-1.56,1.45-2.32,2.19c-0.11,0.11-0.23,0.23-0.34,0.34c-0.64,0.63-1.27,1.27-1.89,1.92c-0.24,0.25-0.47,0.5-0.71,0.75 c-0.5,0.53-0.99,1.06-1.47,1.6c-0.25,0.28-0.5,0.55-0.74,0.83c-0.48,0.54-0.95,1.09-1.41,1.64c-0.22,0.26-0.44,0.53-0.66,0.79 c-0.55,0.67-1.09,1.35-1.63,2.04c-0.11,0.15-0.23,0.29-0.34,0.44c-0.65,0.84-1.28,1.69-1.9,2.55c-0.15,0.2-0.29,0.41-0.43,0.62 c-0.47,0.66-0.92,1.32-1.37,1.98c-0.2,0.29-0.39,0.58-0.58,0.88c-0.39,0.6-0.78,1.2-1.17,1.81c-0.19,0.31-0.38,0.61-0.57,0.92 c-0.39,0.64-0.77,1.28-1.15,1.93c-0.16,0.27-0.31,0.53-0.47,0.8c-1.04,1.83-2.03,3.7-2.95,5.6c-0.13,0.27-0.26,0.55-0.39,0.83 c-0.32,0.68-0.64,1.37-0.95,2.06c-0.15,0.33-0.29,0.67-0.44,1c-0.29,0.66-0.56,1.32-0.83,1.98c-0.14,0.33-0.27,0.66-0.4,0.99 c-0.29,0.74-0.57,1.48-0.85,2.22c-0.09,0.25-0.19,0.5-0.28,0.76c-0.36,1-0.71,2.01-1.03,3.02c-0.05,0.16-0.1,0.32-0.15,0.48 c-0.27,0.85-0.53,1.7-0.78,2.56c-0.1,0.33-0.19,0.67-0.28,1c-0.19,0.7-0.38,1.4-0.56,2.1c-0.09,0.37-0.19,0.74-0.27,1.11 c-0.17,0.7-0.33,1.41-0.49,2.11c-0.08,0.35-0.15,0.69-0.23,1.04c-0.18,0.85-0.34,1.71-0.5,2.57c-0.04,0.2-0.08,0.39-0.11,0.59 c-0.18,1.06-0.35,2.12-0.5,3.19c-0.04,0.28-0.07,0.57-0.11,0.85c-0.1,0.79-0.2,1.57-0.29,2.36c-0.04,0.38-0.08,0.76-0.11,1.15 c-0.07,0.71-0.13,1.43-0.19,2.14c-0.03,0.39-0.06,0.79-0.08,1.18c-0.05,0.75-0.09,1.5-0.12,2.26c-0.01,0.34-0.03,0.69-0.04,1.03 c-0.04,1.09-0.06,2.19-0.06,3.29c0,19.18,5.46,37.83,15.77,53.91c0.73,1.14,1.49,2.26,2.27,3.37c0.23,0.33,0.48,0.66,0.71,0.99 c0.56,0.79,1.14,1.56,1.73,2.33c0.27,0.35,0.54,0.7,0.81,1.05c0.64,0.82,1.3,1.62,1.96,2.42c0.2,0.24,0.4,0.49,0.61,0.73 c0.87,1.02,1.76,2.03,2.67,3.01c0.04,0.05,0.08,0.1,0.13,0.14H83.68z M373.27,452.5c-10.31,0-20.21-2.25-29.42-6.68 c-23.42-11.26-38.55-35.32-38.55-61.28c0-1.62,0.06-3.23,0.17-4.83c1.67-23.97,15.7-45.14,37.47-56.01 c9.45-4.73,19.66-7.13,30.33-7.13c37.47,0,67.96,30.49,67.96,67.97C441.23,422.01,410.74,452.5,373.27,452.5z"></path> <path class="st0" d="M399.2,368.54h-9.93v-9.93c0-8.84-7.16-16-16-16s-16,7.16-16,16v9.93h-9.93c-8.84,0-16,7.16-16,16 s7.16,16,16,16h9.93v9.93c0,8.84,7.16,16,16,16s16-7.16,16-16v-9.93h9.93c8.84,0,16-7.16,16-16S408.03,368.54,399.2,368.54z"></path> </g> </g> </g></svg> 
            </button>
            </a>

    } 
        {/* Event Name   */}
          <div className='text-center relative bottom-20  text-2xl font-bold flex-wrap tracking-wide'>
          {data.name}
          </div>
          {/* Event Location and Date */}
          <div className='flex justify-around relative bottom-[4.4rem] '>
          <div className='text-lg text-highlight text-center items-center flex'>
            <span className='inline-block '>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 8L14 12M14 8L10 12M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" stroke="#77DDEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </span>
            <span className='inline-block '>
            {data.description}
            </span>
          </div>     
          <div className='text-lg text-highlight  text-center items-center flex'>
            <span className='inline-block '>
            <svg width="25px" height="25px" className=' fill-highlight' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs>  </defs> <title></title> <g data-name="Layer 8" id="Layer_8"> <path class="cls-1" d="M5,5V27H27V5ZM25,25H7V12H25ZM7,10V7H25v3Z"></path> <rect class="cls-1" height="5.29" width="2" x="10.38" y="16.08"></rect> <rect class="cls-1" height="5.29" width="2" x="15" y="16.04"></rect> <rect class="cls-1" height="5.29" width="2" x="19.63" y="16.04"></rect> </g> </g></svg>
            </span>
            <span className='inline-block '>
            {data.date}
            </span>
          </div>
          </div>

          {/* Insta Link */}
          {
          data.instaLink?
          <div className=' p-2 absolute bottom-1 left-10 text-lg text-highlight flex justify-center hover:underline'>
         
          <a href={data.instaLink} target='_blank'rel="noreferrer" className='flex justify-center'>
            <span className=' inline-block'>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#77DDEE" stroke-width="2"></path> <circle cx="16.5" cy="7.5" r="1.5" fill="#77DDEE"></circle> <circle cx="12" cy="12" r="3" stroke="#77DDEE" stroke-width="2"></circle> </g></svg>
          </span>
          &nbsp;Event Information
          </a>
       
          </div>
          :""
           }

           
         
</div>
</>
))
}   
    </div>
    
  )
}

export default EventCards
