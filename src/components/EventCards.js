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
    .catch(error =>setData("error"));
  }, []);
  return (
    
    <div className='flex justify-center md:flex-row flex-col flex-wrap items-center align-middle m-2'>
      
 {

 data.length===0?

 <div className='flex justify-center flex-col'>
  {console.log(process.env.REACT_APP_BOARD, data)}
 <img src={NoEvent} alt="Checkback soon for more Events :)" />
 <div className=' text-xl font-headingFont text-highlight -mt-8 text-center'>
    Checkback Later for Upcoming Events!!
 </div>
 </div>
 :
 data.map((data)=>(       
    <>
    
  <div className='container w-[24rem] h-auto bg-secondary rounded-2xl border-4 border-primary sm:scale-100 scale-[0.85] sm:m-5' key={data.id}> 
 
  <div className='flex flex-row justify-center'>

     {/* Date */}
     <div className=' p-0 mx-0 my-auto font-headingFont font-light align-middle'>
    <div className=' text-[4vh] -rotate-90 text-highlight '>
    {data.date}
    </div>
   </div>
    
   {/* pic */}
   <div className='top-0 left-0 w-44 h-44 bg-primary rounded-full ml-2 mt-2 mr-2 border-2 border-highlight z-10 overflow-hidden object-center relative'>
   <img src={`https://drive.google.com/uc?export=view&id=`+data.image} alt="Pic" className='w-auto bg-cover max-w-full absolute top-[0%] left-[0%]'/>

   </div>
     <div className='flex flex-col'>
       <button>
        {/* Instagram */}
        {
       data.instaLink?
       <a href={data.instaLink}>
       <svg className='m-2 mt-8 cursor-pointer hover:scale-110 duration-200 fill-highlight' width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#77DDEE" fill-rule="nonzero"></path> </g> </g></svg>
       </a>
       :""
        }
       </button>
       <button>
        {/* Form */}
        {
          data.formLink?
       <a href={data.formLink}>
       <svg className='m-2 mt-4 cursor-pointer hover:scale-110 duration-200 fill-highlight' width="60px" height="60px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#77DDEE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus_circle [#77DDEE]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -600.000000)" fill="#77DDEE"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440" id="plus_circle-[#77DDEE]"> </path> </g> </g> </g> </g></svg>
       </a>
       :""
        }
       </button>
   </div>
   
   </div>
   <div className='flex flex-row'>
   
   {/* name&description */}
   <div className='top-0 left-0 w-[21rem] h-auto bg-primary rounded-2xl ml-2 mt-2 py-1 text-highlight font-custom font-semibold text-lg overflow-auto text-center flex justify-center mb-2 px-2 '>
    <span className=' font-semibold tracking-wide'>
     {data.name}&nbsp;
     </span>
     <span className='text-secondary font-regular'>&nbsp;{data.description}</span>
   </div>
   </div>
 
 </div>
 </>
))
}   

    </div>
    
  )
}

export default EventCards
