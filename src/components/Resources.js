import React from 'react'
import Heading from './Heading';
import Heart from '../assets/heart.svg'


function Resources() {
  return (
    <div className='mb-20' id="Resources">
    <div className='mx-5'>
      <Heading text="Resources" subtext=" Here we have a few resources you guys will find useful." /> 
    </div>

    <div className='flex justify-center mt-20'>

      <div className='w-[75%] m-10 p-20 h-auto bg-primary rounded-2xl border-4 border-secondary align-middle flex justify-around text-[2.5vh] text-secondary md:flex-row flex-col font-medium relative ' >

          <div>
            <div className='text-[2.5vh] font-medium rounded-2xl p-1 border-2 border-secondary text-center'>
            Founded
            </div>
            <div className='text-[5vh] font-bold'>
              2014
            </div>
          </div>

          <div>
            <div className='text-[2.5vh] font-medium rounded-2xl p-1 border-2 border-secondary text-center'>
            Location
            </div>
            <div className='text-[5vh] font-bold text-center'>
              Manipal, Karnataka
            </div>
          </div>

      </div>
    </div>

    <div className='text-center items-center flex justify-around -mx-2 text-highlight font-medium text-[2.5vh]'>

    <div>

    <div className='hover:underline'>
    <a href="/">
    Collaborators
    </a>
    </div>
   
    <div className='hover:underline'>
    <a href="/">
    Club Policies
    </a>
    </div>
   
    </div>

    <div>
      <div className='hover:underline'>
    <a href="/">
    Tech Tatva
    </a>
    </div>

    <div className='hover:underline'>
    <a href="/">
    Contact Details
    </a>
    </div>
   
    </div>

    </div>
    <div className='text-center items-center align-middle text-secondary text-lg font-medium mt-16'>
      <span className='flex justify-center'><img src={Heart} alt="<3" /></span>
     Website made inHouse at IE-EnC  <br />
    </div>
    </div>
  )
}

export default Resources
