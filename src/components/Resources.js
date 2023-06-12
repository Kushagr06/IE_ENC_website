import React from 'react'
import Heading from './Heading';


function Resources() {
  return (
    <div className='mb-36'>
    <div className='mx-5'>
      <Heading text="Resources" subtext=" Here we have a few resources you guys will find useful." /> 
    </div>

    <div className='flex justify-center mt-10'>

      <div className='w-[75%] m-10 p-20 h-auto bg-primary rounded-2xl border-4 border-secondary align-middle flex justify-around text-[2.5vh] text-secondary md:flex-row flex-col font-medium relative'>

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

    <div className='text-center items-center flex justify-around mx-10 text-highlight font-medium'>

    <div>
    <div>
    Collaborators
    </div>
    <div>
    Club Policies
    </div>
    </div>

    <div>
    <div>
    Tech Tatva
    </div>
    <div>
    Contact Details
    </div>
    </div>

    </div>
    </div>
  )
}

export default Resources
