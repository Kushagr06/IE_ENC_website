import React from 'react'
import Tri from '../assets/Pyramid .svg'
import Ring from '../assets/Ring.svg'
import '../App.css'
import {motion} from 'framer-motion'

function Pyramid() {
  return (
    
    <div className='relative top-0 left-0 '>
     
      
      <img src={Tri} alt="triangle" id="tri" className='scale-75'/>
      <img src={Ring} alt="ring" id="ring" />
         
    </div>
  )
}

export default Pyramid
