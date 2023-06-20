import React from 'react'
import axios from 'axios';
import '../App.css'


function Pictures() {
  const baseURL=`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/pics`
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  data.sort((a,b)=>a.id-b.id)

  if(!data) return null
  return (
    <div className='flex-row justify-center overflow-auto flex-wrap inline-flex'>
      {data.map((info)=>(
      
        <img src={`https://drive.google.com/uc?export=view&id=`+info.pic} alt={info.id} key={info.id} id="groupImg" className='w-auto md:h-[50vh] h-[25vh] m-2 border-8 border-secondary mb-4' />
      ))}
    </div>
  )
}

export default Pictures
