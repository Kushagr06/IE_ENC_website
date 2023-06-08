import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {

 
  return (
    <div className='bg-background font-custom text-textcol overflow-auto font-custom' id="main">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
