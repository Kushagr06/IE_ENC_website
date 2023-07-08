import React from 'react'
import Heading from './Heading';
import Group from '../assets/group_2.png'
import '../App.css'
import Board from './Board';
import {motion} from 'framer-motion';

function WhoWeAre() {
  return (
    <div className=' mb-16' id="WhoWeAre">
    <div className='mx-5'>
      <Heading text="Who We Are" subtext=" We are a dedicated team of students from various branches and batches, passionate about all things technology and we work tirelessly to ensure that every member has an enriching and enjoyable tenure in our club. As a member of IE-E&C, you'll have access to a wide range of opportunities to expand your horizons. From technical workshops and guest lectures by industry experts to hands-on projects and competitions, there's something for everyone. We believe in learning by doing, and our club provides ample opportunities to apply your theoretical knowledge in real-world scenarios." /> 
    </div>
    <div className='flex xl:flex-row flex-col-reverse mx-10 my-5 justify-around'>
    <motion.div
         initial={{x:-250,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
      <div className='font-headingFont text-highlight md:text-[3vh] text-[2vh] flex justify-center items-center flex-row relative sm:mt-14 mt-2 mb-10'>
        <div >
        <svg className='w-[64px] h-[64px] md:w-[128px] md:h-[128px]'  viewBox="0 0 91 91" enableBackground="new 0 0 91 91" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M59.02,79.74H44.482c-1.385,0-2.506-1.119-2.506-2.504V13.141c0-1.383,1.121-2.506,2.506-2.506H59.02 c1.385,0,2.506,1.123,2.506,2.506s-1.121,2.504-2.506,2.504H46.986V74.73H59.02c1.385,0,2.506,1.123,2.506,2.506 C61.525,78.621,60.404,79.74,59.02,79.74z" fill="#77DDEE"></path> <path d="M59.02,47.693h-26.85c-1.385,0-2.506-1.121-2.506-2.506s1.121-2.504,2.506-2.504h26.85 c1.385,0,2.506,1.119,2.506,2.504S60.404,47.693,59.02,47.693z" fill="#77DDEE"></path> <g> <path d="M69.451,65.137c-6.676,0-12.105,5.43-12.105,12.102s5.43,12.1,12.105,12.1 c6.674,0,12.104-5.428,12.104-12.1S76.125,65.137,69.451,65.137z" fill="#77DDEE"></path> <path d="M69.451,33.203c-6.676,0-12.105,5.428-12.105,12.102c0,6.67,5.43,12.098,12.105,12.098 c6.674,0,12.104-5.428,12.104-12.098C81.555,38.631,76.125,33.203,69.451,33.203z" fill="#77DDEE"></path> <path d="M69.451,25.24c6.674,0,12.104-5.428,12.104-12.098c0-6.674-5.43-12.104-12.104-12.104 c-6.676,0-12.105,5.43-12.105,12.104C57.346,19.813,62.775,25.24,69.451,25.24z" fill="#77DDEE"></path> </g> <path d="M32.169,29.5H10.693c-1.383,0-2.504,1.123-2.504,2.506v26.592c0,1.383,1.121,2.506,2.504,2.506h21.477 c1.383,0,2.504-1.123,2.504-2.506V32.006C34.673,30.623,33.552,29.5,32.169,29.5z" fill="#77DDEE"></path> </g> </g> </g></svg>
        </div>

        <div className=' font-custom md:text-3xl tracking-wider'>
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
       <img src={Group} alt="group_photo" id="groupImg" className='w-auto md:h-[40vh] h-[20vh] m-2 border-8 border-secondary mb-4 rounded-xl'/>
       </motion.div>
      </div>     
    </div>
    <div className=' text-[2.5vh] tracking-widest font-custom font-semibold m-2 ml-5'>
      
                    
                      </div>
    <Board />
    </div>
  )
}

export default WhoWeAre
