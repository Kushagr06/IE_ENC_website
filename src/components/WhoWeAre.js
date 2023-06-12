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
      <div className='font-headingFont text-highlight md:text-[4vh] text-[3vh] flex justify-center items-center'>
        12 BOARD MEMBERS <br/><br/>
        70 MANAGEMENT COMMITTEE MEMBERS <br/><br/>
        80 WORKING COMMITTEE MEMBERS <br/><br/>
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
