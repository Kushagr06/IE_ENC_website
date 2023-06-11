import './App.css';
import GetinTouch from './components/GetinTouch';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Upcoming from './components/Upcoming';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';



function App() {

 
  return (
    <div className='bg-background text-textcol overflow-hidden' id="main">
      <Navbar />
      <Hero />
     
      <WhoWeAre />
      <WhatWeDo />
      <GetinTouch />
      <Upcoming />
   
    </div>
  );
}

export default App;
