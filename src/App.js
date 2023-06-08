import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {

 
  return (
    <div className='bg-background text-textcol overflow-auto' id="main">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
