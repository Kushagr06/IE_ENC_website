import React ,{Component}from 'react'
import Heading from './Heading';
import Heart from '../assets/heart.svg'
import {motion} from 'framer-motion';
import Constitution from '../assets/Constitution.pdf';
import Switch from "react-switch";
import Pictures from './Pictures';



export default class Resources extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }



  render() {
  return (
    <div className='mb-20' id="Resources">
    <div className='mx-5'>
      <Heading text="Resources" subtext=" Here we have a few resources you guys will find useful." /> 
    </div>
    <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
    <div className='flex justify-center mt-12'>

      <div className='w-[75%] m-10 p-20 h-auto bg-primary rounded-2xl border-4 border-secondary align-middle flex justify-around text-[2.5vh] text-secondary md:flex-row flex-col font-medium relative ' >

          <div>
            <div className='text-[2.5vh] font-medium rounded-2xl p-1 border-2 border-secondary text-center'>
            Founded
            </div>
            <div className='text-[5vh] font-bold'>
              2011
            </div>
          </div>

          <div>
            <div className='text-[2.5vh] font-medium rounded-2xl p-1 border-2 border-secondary text-center'>
            Location
            </div>
            <div className='text-[5vh] font-bold text-center'>
              Manipal, Karnataka
            </div>
          </div>

          
      </div>
      
    </div>

    <div className='text-center items-center flex justify-around -mx-2 text-highlight font-medium text-[2.5vh]'>

    <div>

     <div className='hover:underline'>
    <a href={Constitution} download="Constitution">
    Our Constitution.
    </a>
    </div>
    </div>
    </div>

    <div className=' text-textcol '>
    
    <label>
      <div className="text-[4.5vh] font-custom  font-semibold inline-block ml-[10vh] mt-10 px-2">
        
        {/* pic-logo */}
        <svg fill="#DABFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 477.005 477.005" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M7.075,204.297l71.191,34.293v57.087c0,4.801,2.75,9.178,7.075,11.262l136.194,65.605c1.692,0.814,3.546,1.237,5.425,1.237 h22.886c1.879,0,3.732-0.423,5.426-1.237l135.817-65.425c2.633-1.27,4.738-3.42,5.95-6.079c0.171-0.375,0.334-0.754,0.497-1.134 c0.663-1.552,1.005-3.223,1.005-4.91v-56.407l19.419-9.354v77.412c-4.202,2.801-7.441,6.998-9.01,12.109l-11.049,36.002 c-1.361,4.44-1.324,9.124,0.109,13.542l10.246,31.578c2.922,9.007,11.245,15.254,20.709,15.545 c0.063,0.002,0.125,0.003,0.188,0.004l0.312,0.005c0.065,0.001,0.13,0.001,0.196,0.001c9.304,0,17.52-5.594,20.931-14.253 l11.847-30.072c1.828-4.637,2.059-9.824,0.65-14.605L452.043,319c-1.539-5.229-4.806-9.522-9.083-12.368v-89.438l26.97-12.992 c4.325-2.084,7.075-6.46,7.075-11.262v-9.955c0-4.801-2.75-9.178-7.075-11.262L243.827,62.81c-3.429-1.651-7.422-1.651-10.85,0 L7.075,171.628C2.75,173.711,0,178.088,0,182.89v10.146C0,197.837,2.75,202.213,7.075,204.297z M429.886,385.539l-7.853-24.202 l8.376-27.295l8.456,28.704L429.886,385.539z M373.54,287.824l-126.548,60.959h-17.179l-126.547-60.959v-37.19l129.712,62.483 c1.714,0.826,3.569,1.238,5.425,1.238s3.71-0.412,5.425-1.238l129.713-62.482L373.54,287.824L373.54,287.824z M238.402,87.946 l207.632,100.017l-63.763,30.715c-0.562,0.178-1.116,0.387-1.656,0.646L238.402,287.83L96.19,219.324 c-0.539-0.259-1.093-0.468-1.654-0.646l-63.764-30.716L238.402,87.946z"></path> </g> </g></svg>
        
        Alumni</div>
        </label>
        
        <Switch className="mb-[2vh]" onChange={this.handleChange} checked={this.state.checked} offColor="#4F518C" onColor="#4F518C" offHandleColor="#DABFFF" onHandleColor="#77DDEE" uncheckedIcon="" checkedIcon=""/>
        {this.state.checked?
         <motion.div
         initial={{y:250,opacity:0}}
         whileInView={{y:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
          <Pictures use="alumni"/>
        </motion.div>

        :""}
    </div>
    
   {/*
    <div className='hover:underline'>
    <a href="/">
    Club Policies
    </a>
    </div>
   
    </div>

    <div>
      <div className='hover:underline'>
    <a href="/">
    Tech Tatva
    </a>
    </div>

    <div className='hover:underline'>
    <a href="/">
    Contact Details
    </a>
    </div> */}
   
    
    <div className='text-center items-center align-middle text-secondary text-lg font-medium mt-16'>
      <span className='flex justify-center'><img src={Heart} alt="<3"/></span>
     Website made and maintained by IE-E&C, Manipal.  <br />
    </div>
    </motion.div>
    </div>
  )
}
}