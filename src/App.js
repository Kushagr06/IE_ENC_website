import './App.css';
import GetinTouch from './components/GetinTouch';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import Upcoming from './components/Upcoming';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import {motion} from 'framer-motion'



function App() {

 
  return (
    <div className='bg-background text-textcol overflow-hidden' id="main">
      <Navbar />
      <Hero />
      <WhoWeAre />

      <motion.div
         initial={{y:250,opacity:0}}
         whileInView={{y:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
      <WhatWeDo />
      </motion.div>

       
      <motion.div
         initial={{x:250,opacity:0}}
         whileInView={{x:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
      <GetinTouch />
      </motion.div>

      <Upcoming />
      <Resources />
    </div>
  );
}

export default App;
