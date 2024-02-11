import React from 'react'
import Heading from './Heading';
import EventCards from './EventCards';
import {motion} from 'framer-motion';


function Upcoming() {
  return (
    <div className='mb-16' id="Upcoming">
      <div className='mx-5 mb-16'>
    <a href="https://ibb.co/kD0yPRk"><img src="https://i.ibb.co/rpMtXCT/Jeewant.jpg" alt="Jeewant" border="0"></a>
      <Heading text="Upcoming" subtext="Lookut! Here are the Upcoming Events for the season." /> 
    </div>
    <motion.div
         initial={{y:250,opacity:0}}
         whileInView={{y:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
    <EventCards />
    </motion.div>
    </div>
  )
}

export default Upcoming
