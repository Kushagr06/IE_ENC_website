import React from 'react'
import Heading from './Heading';
import EventCards from './EventCards';


function Upcoming() {
  return (
    <div className='mb-16' id="Upcoming">
      <div className='mx-5'>
      <Heading text="Upcoming" subtext="Here are the Upcoming Events for the season" /> 
    </div>
    <EventCards />
    </div>
  )
}

export default Upcoming
