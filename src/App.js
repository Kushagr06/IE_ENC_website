import './App.css';
import GetinTouch from './components/GetinTouch';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import Upcoming from './components/Upcoming';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import {motion} from 'framer-motion';



function App() {

 
  return (
    <div className='bg-background text-textcol overflow-hidden' id="main">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <motion.div
         variants={{
          hidden:{opacity:0,y:200},
          visible:{opacity:1,y:0},
         }}
         initial="hidden"
         animate="visible"
         transition={{duration:0.5, delay:2}}
        > 
      <WhatWeDo />
      </motion.div>
      <GetinTouch />
      <Upcoming />
      <Resources />
    </div>
  );
}

export default App;
