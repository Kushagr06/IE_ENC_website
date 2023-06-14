import React from 'react'
import Dots from '../assets/dots2.svg'

function Heading(props) {
  return (
    <div>
       <div className='flex justify-start flex-col  mb-5'>
       <div className='conatiner m-5 mt-10'>
                            <div>
                          <img src={Dots} alt="....." className='opacity-20 m-0 ml-16 xl:w-[50vw] w-[100vw] h-auto' />
                          </div>
                      <div className='flex text-[5.5vh] xl:-mt-[30vh] -mt-[20vh] text-highlight text-right font-headingFont font-semibold tracking-tighter z-10 overflow-hidden '>
                      {props.text}
                      </div>
                      <div className=' text-[2.5vh] tracking-widest font-custom font-semibold mt-2 z-10'>
                     {props.subtext}
                      </div>
                      </div> 
                <div>
                </div>     
    </div>
      </div>
  )
}

export default Heading
