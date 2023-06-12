import React from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll';


function Navbar() {
  const [toggle, settoggle] = React.useState('hidden')

const prop=` w-full md:block md:w-auto ${toggle}`
 return (
 <div className=' overflow-clip pb-20 bg-background font-custom'> 
<nav  className="px-2 sm:px-4 fixed top-0 left-0 right-0 z-20 overflow-hidden md:bg-opacity-70 bg-background rounded-xl">
 <div className="container flex flex-wrap items-center justify-between mx-auto">

   <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
       <button>
       <img src={Logo} className=" w-auto h-20 sm:h-24 flex justify-center mx-5" alt="Logo" />
       </button>
   </Link>

   <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-md text-highlight  rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary font-light" aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{toggle==='hidden'?settoggle(' '):settoggle('hidden') }} 
   >
     
     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Hamburger_LG"> <path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="#77DDEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
   </button>

   <div className={prop} id="navbar-sticky">
     <ul className="flex flex-col md:flex-row md:space-x-10 md:text-sm md:font-light md:border-0 px-16 ">
     <li>
         <Link to="WhoWeAre" spy={true} smooth={true} offset={0} duration={500} className=" md:text-lg block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Who We Are
           </button>
           </Link>
       </li>
       <li>
         <Link to="WhatWeDo" spy={true} smooth={true} offset={0} duration={500} className=" md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           What We Do
           </button>
           </Link>
       </li>
       <li>
         <Link to="GetinTouch" spy={true} smooth={true} offset={0} duration={500} className="  md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Get in Touch
           </button>
           </Link>
       </li>
       <li>
         <Link to="Upcoming" spy={true} smooth={true} offset={0} duration={500} className=" md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
          Upcoming
           </button>
           </Link>
       </li>
       <li>
         <Link to="Resources" spy={true} smooth={true} offset={0} duration={500} className=" md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
          Resources
           </button>
           </Link>
       </li>
     
     </ul>
   </div>

 </div>
</nav>
   </div>
 )
}

export default Navbar
