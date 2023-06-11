import React from 'react'
import Heading from './Heading';


function Resources() {
  return (
    <div className='mb-36'>
    
    <div className='mx-5'>
      <Heading text="Resources" subtext=" Here we have a few resources you guys will find useful." /> 
    </div>
    <div className='flex justify-center mt-20'>
    <div className='w-2/3 h-96 bg-primary rounded-2xl border-4 border-secondary align-middle flex justify-center text-[5vh] text-highlight flex-col m-20'>
      <div>
      Collaborators
      Club Policies
      </div>
      <div>
        Tech Tatva
        Contact Details
      </div>
    </div>
    </div>
    </div>
  )
}

export default Resources
