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

        <img src={`https://drive.google.com/uc?export=view&id=`+info.pic} alt={info.id} key={info.id} id="groupImg" className='w-auto rounded-xl md:h-[50vh] h-[25vh] m-2 border-8 border-secondary mb-4' />
        {info.contact?
        <div className='bg-secondary text-highlight text-center -mt-6 text-[3.5vh] border-b-8 border-highlight flex justify-center rounded-xl' id="groupImg">
           
          <a href={`mailto:`+info.contact}  target="_blank" rel="noreferrer">
          <svg className='m-2 cursor-pointer hover:scale-125 duration-200 h-[6vh] w-[6vh]' fill="#77DDEE"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"></path></g></svg>
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
