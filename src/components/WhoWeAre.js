import React from 'react'
import Heading from './Heading';
import Group from '../assets/group_photo.png'
import '../App.css'
import Board from './Board';
import {motion} from 'framer-motion';

function WhoWeAre() {
  return (
    <div className=' mb-16' id="WhoWeAre">
    <div className='mx-5'>
      <Heading text="Who We Are" subtext=" We are the official Electroniczs and Communication sclub of Manipal.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni modi repellat illum deleniti consectetur ex obcaecati ipsum repudiandae commodi molestiae sapiente aliquam praesentium fugiat impedit vitae, enim minus eveniet accusantium." /> 
    </div>
    <div className='flex xl:flex-row flex-col-reverse mx-10 my-5 justify-around'>
    <motion.div
         initial={{x:-250,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
      <div className='font-headingFont text-highlight md:text-[3vh] text-[2vh] flex justify-center items-center flex-row relative'>
        <div>
        <svg width="100px" height="100px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#77DDEE" d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path> </g></svg>
        </div>

        <div>
        BOARD  <br/>
        MANAGEMENT COMMITTEE  <br/>
        WORKING COMMITTEE  <br/>
        </div>
       
      </div>
      </motion.div>
      <div>
      <motion.div
         initial={{x:250,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
       <img src={Group} alt="group_photo" id="groupImg" className='w-auto md:h-[40vh] h-[22vh] m-2 border-8 border-secondary mb-4'/>
       </motion.div>
      </div>     
    </div>
    <div className=' text-[2.5vh] tracking-widest font-custom font-semibold m-2 ml-5'>
                    Checkout the Board Members 
                      </div>
    <Board />
    </div>
  )
}

export default WhoWeAre
