import React from 'react'
import Logo from '../assets/Logo.png'


function Navbar() {
  const [toggle, settoggle] = React.useState('hidden')

const prop=` w-full md:block md:w-auto ${toggle}`
 return (
 <div className=' overflow-clip pb-20 bg-background font-semibold'> 
<nav  className="px-2 sm:px-4 fixed top-0 left-0 right-0 z-10 overflow-hidden bg-background rounded-lg">
 <div className="container flex flex-wrap items-center justify-between mx-auto">

   <a href="/">
       <button>
       <img src={Logo} className=" w-auto h-20 sm:h-24 flex justify-center mx-5" alt="Logo" />
       </button>
   </a>

   <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-md text-highlight  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 font-light" aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{toggle==='hidden'?settoggle(' '):settoggle('hidden') }} 
   >
     
     <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_02"> <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
   </button>

   <div className={prop} id="navbar-sticky">
     <ul className="flex flex-col md:flex-row md:space-x-10 md:text-sm md:font-light md:border-0 px-16 ">
     <li>
         <a href="/" className=" md:text-xl  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Home
           </button>
           </a>
       </li>
       <li>
         <a href="/events" className="  md:text-xl  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Events
           </button>
           </a>
       </li>
       <li>
         <a href="/members" className="  md:text-xl  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Members
           </button>
           </a>
       </li>
       <li>
         <a href="/alumni" className=" md:text-xl  block py-2 pl-3 pr-4 text-highlight rounded md:hover:bg-transparent md:border-0 md:p-0">
           <button>
           Alumni
           </button>
           </a>
       </li>
     
     </ul>
   </div>

 </div>
</nav>
   </div>
 )
}

export default Navbar
