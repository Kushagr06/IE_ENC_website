import React, { Component }  from 'react'
import Heading from './Heading';
import Switch from "react-switch";
import Pyramid from './Pyramid';
import {motion} from 'framer-motion';
import Pictures from './Pictures';


export default class WhatWeDo extends Component {
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
    <div className='mb-16' id="WhatWeDo">
      <div className='mx-5'>
      <Heading text="What We Do" subtext="Our mission is to foster a vibrant community of students who share a common love for electronics and related fields. We provide a platform for students to connect, collaborate, and engage in various activities and events that not only enhance their technical knowledge but also help them grow personally and professionally. We also host events such as hackathons, competitions, and guest lectures from industry professionals, some even in collaboration with other clubs or organisations, through which you get to gain both, experience in management as well as technical knowledge." /> 
    </div>

    {/* Pyramid */}
    <div className='flex justify-center'>
      <Pyramid />
    </div>
    <div className=' md:text-[2.5vh] text-[2vh] tracking-widest font-custom font-semibold m-2 sm:ml-16'>
                    Checkout some pictures from the latest club activities. 
                      </div>
    <label>
      <div className="text-[4.5vh] font-custom  font-semibold inline-block ml-[10vh] mt-10 px-2">
        
        {/* Pictures */}
        <svg  fill="#DABFFF" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 368 368" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M328,32H40C18,32,0,50,0,72v224c0,22,18,40,40,40h288c22,0,40-18,40-40V72C368,50,350,32,328,32z M352,185.6l-38-38 c-6.4-6.4-16-6.4-22.4,0L200,238.8l-0.4-0.4L153.2,192c-6-6-16.4-6-22.4,0l-39.2,39.2c-3.2,3.2-3.2,8,0,11.2 c3.2,3.2,8,3.2,11.2,0l39.2-39.2l46.4,46.4l0.4,0.4l-32.4,32.4c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4 l135.2-134.8l47.6,47.6c0.4,0.4,1.2,0.8,1.6,1.2V296c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V72c0-13.2,10.8-24,24-24h288 c13.2,0,24,10.8,24,24V185.6z"></path> <path d="M72.4,250.4l-8,8c-3.2,3.2-3.2,8,0,11.2C66,271.2,68,272,70,272s4-0.8,5.6-2.4l8-8c3.2-3.2,3.2-8,0-11.2 C80.4,247.2,75.6,247.2,72.4,250.4z"></path> <path d="M88,80c-22,0-40,18-40,40s18,40,40,40s40-18,40-40S110,80,88,80z M88,144c-13.2,0-24-10.8-24-24s10.8-24,24-24 s24,10.8,24,24S101.2,144,88,144z"></path> </g> </g> </g> </g></svg>
        
        Pictures</div>
        </label>

        <Switch className="mb-[2vh]" onChange={this.handleChange} checked={this.state.checked} offColor="#4F518C" onColor="#4F518C" offHandleColor="#DABFFF" onHandleColor="#77DDEE" uncheckedIcon="" checkedIcon=""/>
        {this.state.checked?
         <motion.div
         initial={{y:250,opacity:0}}
         whileInView={{y:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
          <Pictures use="main"/>
        </motion.div>

        :""}
    </div>
  )
        }
}


