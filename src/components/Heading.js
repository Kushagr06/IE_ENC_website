import React from 'react'
import Dots from '../assets/dots.svg'

function Heading(props) {
  return (
    <div>
       <div className='flex justify-center flex-col text-center items-center overflow-hidden mb-5'>
       <div className='conatiner'>
                            <div>
                          <img src={Dots} alt="....." className='opacity-50 m-0 ml-16 xl:w-[50vw] w-[100vw] h-auto' />
                          </div>
                      <div className=' flex text-[6.2vh] xl:-mt-[40vh] -mt-[20vh] text-highlight text-right font-headingFont font-semibold tracking-tighter'>
                      {props.text}
                      </div>
                      <div className=' text-[2.2vh] text-center tracking-wider font-custom font-semibold mt-2'>
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
