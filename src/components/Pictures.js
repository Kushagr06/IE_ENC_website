import React from 'react'
import axios from 'axios';
import '../App.css'

// Pictures Section between What We Do and Alumni Pictures
function Pictures(props) {
  const baseURL='https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/pics'
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  // Double Sorting of Data
  data.sort((a,b)=>a.id-b.id)
  data.sort((a,b)=>a.year-b.year)

  // console.log(props.use)

  return (
    <div className='flex-row justify-center overflow-auto flex-wrap inline-flex'>
      { 
      // Filters and places year and mailbox if the photo is alumni 
      data.filter(info=>{
    return info.use===props.use
  }).map((info)=>(     
        <div className='flex flex-col m-5' key={info.id}>
          {info.year?
        <div className='bg-secondary text-highlight text-center -mb-6 text-[3.5vh] border-t-8 border-highlight flex justify-center z-10 rounded-xl font-headingFont' id="groupImg ">
           {info.year}
        </div>
        :""}

        <img src={ 'https://drive.usercontent.google.com/download?id=`+info.pic + `&export=view&authuser=0`} alt={info.id} key={info.id} id="groupImg" className='w-auto rounded-xl md:h-[50vh] h-[25vh] m-2 border-8 border-secondary mb-4' />
        {info.contact?
        <div className='bg-secondary text-highlight text-center -mt-6 text-[3.5vh] border-b-8 border-highlight flex justify-center rounded-xl' id="groupImg">
           
          <a href={`mailto:`+info.contact}  target="_blank" rel="noreferrer">
          <svg className='m-2 shadow-md shadow-background rounded-full cursor-pointer hover:scale-125 duration-200' width="50px" height="50px" viewBox="-7.5 -7.5 40.00 40.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-7.5" y="-7.5" width="40.00" height="40.00" rx="20" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2091 5.41992C15.5991 16.0599 8.39906 16.0499 2.78906 5.41992" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1.99023 7.39001V17.39C1.99023 18.4509 2.41166 19.4682 3.1618 20.2184C3.91195 20.9685 4.92937 21.39 5.99023 21.39H17.9902C19.0511 21.39 20.0685 20.9685 20.8186 20.2184C21.5688 19.4682 21.9902 18.4509 21.9902 17.39V7.39001C21.9902 6.32915 21.5688 5.31167 20.8186 4.56152C20.0685 3.81138 19.0511 3.39001 17.9902 3.39001H5.99023C4.92937 3.39001 3.91195 3.81138 3.1618 4.56152C2.41166 5.31167 1.99023 6.32915 1.99023 7.39001Z" stroke="#4F518C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
         
        </div>
        :""}
        </div>
      ))
      }
    </div>
  )
}

export default Pictures
