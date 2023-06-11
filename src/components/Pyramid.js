import React from 'react'
import Tri from '../assets/Pyramid .svg'
import Ring from '../assets/Ring.svg'
import '../App.css'

function Pyramid() {
  return (
    
    <div className='relative top-0 left-0 '>
      
      <img src={Tri} alt="triangle" id="traingle" />
      <img src={Ring} alt="ring" id="ring" />
    
    </div>
  )
}

export default Pyramid
