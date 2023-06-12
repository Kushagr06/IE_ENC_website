import React from 'react'
import Heading from './Heading';
import EventCards from './EventCards';
import {motion} from 'framer-motion';


function Upcoming() {
  return (
    <div className='mb-16' id="Upcoming">
      <div className='mx-5'>
      <Heading text="Upcoming" subtext="Here are the Upcoming Events for the season" /> 
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
