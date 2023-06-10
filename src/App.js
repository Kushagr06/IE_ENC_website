import './App.css';
import BoardCard from './components/BoardCard';
import GetinTouch from './components/GetinTouch';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import Wave from 'react-wavify'


function App() {

 
  return (
    <div className='bg-background text-textcol overflow-auto' id="main">
      <Navbar />
      <Hero />
      <div>
      <Wave
      fill='#907AD6'
      paused={false}
      options={{
        height:120,
        amplitude:110,
        speed:0.4,
        points:4
      }}
      />
      </div> 
      <WhoWeAre />
      <GetinTouch />
    </div>
  );
}

export default App;
