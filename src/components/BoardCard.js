import React from 'react';
import axios from 'axios';

function BoardCard() {
  const baseURL='https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/board'
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if(!data) return null

  data.sort((a,b)=>a.id-b.id)

  return (
    
    <div className='flex-row justify-center overflow-auto flex-wrap inline-flex'>
      
    {
    data.map((info)=>(
      <div className=' flex sm:m-4  md:m-2 -mx-[w/2] font-custom justify-center sm:scale-100 scale-[0.90]' key={info.id}>
       
         {/* picture */}
         <div className='rounded-full h-32 w-32 bg-primary border-2 border-primary -mr-16 z-10 overflow-hidden object-center relative shadow-md shadow-background'>
            <img src={`https://drive.google.com/uc?export=view&id=`+info.pic} alt=" " className='w-auto bg-cover max-w-full absolute top-2 left-0 h-auto scale-[1.15]'/>
          </div>

          {/* card */}
          <div className='rounded-2xl sm:mb-4 w-64 h-80 bg-secondary border-2 border-primary '>
          <div className='ml-20 mt-10 text-xl font-bold text-textcol tracking-widest w-auto h-14 '>
          {info.name}
          </div>
          <div className='text-lg ml-5 mr-2 mt-10 font-bold text-secondary  rounded-xl p-4 bg-primary tracking-tight relative text-center '>
            {info.position}
          </div>

          <div className='flex flex-row m-5 absolute left-[25%]  mb:bottom-1 bottom-0'>
            {/* LinkedIn */}
            {info.linkedIn.length>1?
          <a href={info.linkedIn}  target="_blank" rel="noreferrer">
         <svg className='m-2 cursor-pointer hover:scale-125 duration-200 fill-secondary'fill="#4F518C" width="50px" height="50px" viewBox="-806.4 -806.4 3532.80 3532.80" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-806.4" y="-806.4" width="3532.80" height="3532.80" rx="1766.4" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"></path> </g></svg>
          </a>
         :"" }

            {/* Instagram */}
            {info.instagram.length>1?
          <a href={info.instagram}  target="_blank" rel="noreferrer">
       <svg  className='m-2 cursor-pointer hover:scale-125 duration-200 fill-highlight' width="50px" height="50px" viewBox="-5.52 -5.52 35.04 35.04" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-5.52" y="-5.52" width="35.04" height="35.04" rx="17.52" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.6361 7H17.6477" stroke="#4F518C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
          :"" }

            {/* Mail */}
            {info.email.length>1?
          <a href={`mailto:`+info.email}  target="_blank" rel="noreferrer">
         <svg className='m-2 cursor-pointer hover:scale-125 duration-200' width="50px" height="50px" viewBox="-7.5 -7.5 40.00 40.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-7.5" y="-7.5" width="40.00" height="40.00" rx="20" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2091 5.41992C15.5991 16.0599 8.39906 16.0499 2.78906 5.41992" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1.99023 7.39001V17.39C1.99023 18.4509 2.41166 19.4682 3.1618 20.2184C3.91195 20.9685 4.92937 21.39 5.99023 21.39H17.9902C19.0511 21.39 20.0685 20.9685 20.8186 20.2184C21.5688 19.4682 21.9902 18.4509 21.9902 17.39V7.39001C21.9902 6.32915 21.5688 5.31167 20.8186 4.56152C20.0685 3.81138 19.0511 3.39001 17.9902 3.39001H5.99023C4.92937 3.39001 3.91195 3.81138 3.1618 4.56152C2.41166 5.31167 1.99023 6.32915 1.99023 7.39001Z" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
          :"" }

          </div>
        </div>
      </div>

    ))
    }
    </div>
  )
}

export default BoardCard
