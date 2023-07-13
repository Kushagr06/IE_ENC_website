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
    <div className=' md:text-[2.5vh] text-[2vh] tracking-widest font-custom font-medium m-2 ml-10 sm:ml-16'>
                    Checkout some pictures from the latest club activities! 
                      </div>
    <label>
      <div className="text-[4.5vh] font-custom  font-semibold inline-block ml-[10vh] mt-10 px-2">
        
        {/* Pictures */}
        <svg width="50px" height="50px" viewBox="0 -199 1422 1422" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M42.654897 44.076645l1349.31408 0 0 942.671481-1349.31408 0 0-942.671481Z" fill="#2C2A4A"></path><path d="M396.974253 407.495696m-136.779784 0a136.779783 136.779783 0 1 0 273.559567 0 136.779783 136.779783 0 1 0-273.559567 0Z" fill="#DABFFF"></path><path d="M1022.578252 407.495696m-136.779784 0a136.779783 136.779783 0 1 0 273.559567 0 136.779783 136.779783 0 1 0-273.559567 0Z" fill="#DABFFF"></path><path d="M1066.654897 995.279089l-66.257151-195.359067-575.840044 4.834213L369.959535 984.757567l696.695362 10.521522z" fill="#2C2A4A"></path><path d="M1413.01202 69.669536A116.305471 116.305471 0 0 0 1308.081168 0.284365h-1194.334907a113.746182 113.746182 0 0 0-113.746182 113.746182v796.223271a113.746182 113.746182 0 0 0 113.746182 113.746182h1194.334907a113.746182 113.746182 0 0 0 113.746181-113.746182v-796.223271a113.746182 113.746182 0 0 0-8.815329-44.361011zM394.699329 966.842544l49.195224-138.201611h536.881977L1029.971754 966.842544H394.699329z m971.676757-56.873091a56.873091 56.873091 0 0 1-56.873091 56.873091h-219.245765l-69.953902-195.074702h-617.073035L333.845122 966.842544H114.599357a56.873091 56.873091 0 0 1-56.873091-56.873091V113.746182a56.873091 56.873091 0 0 1 56.873091-56.873091h1194.334907a56.873091 56.873091 0 0 1 56.873091 56.873091v796.223271z" fill="#DABFFF"></path><path d="M1027.412464 228.061094h-645.50958a170.619272 170.619272 0 0 0-153.27298 170.619273 172.325465 172.325465 0 0 0 0 17.346292 170.619272 170.619272 0 0 0 152.419883 152.419884h644.94085a170.619272 170.619272 0 0 0 167.775618-152.988615 172.325465 172.325465 0 0 0 0-17.346292 170.619272 170.619272 0 0 0-166.353791-170.050542zM398.39608 512.426548a113.746182 113.746182 0 1 1 113.746182-113.746181 113.746182 113.746182 0 0 1-113.746182 113.461816z m126.542627 0a170.619272 170.619272 0 0 0 43.223549-96.399889 172.325465 172.325465 0 0 0 0-17.346292 170.619272 170.619272 0 0 0-43.79228-113.746182H896.035625a170.619272 170.619272 0 0 0-43.79228 113.746182 172.325465 172.325465 0 0 0 0 17.346292 170.619272 170.619272 0 0 0 43.223549 96.399889h-372.518745z m499.061372 0a113.746182 113.746182 0 1 1 113.746182-113.746181 113.746182 113.746182 0 0 1-113.746182 113.461816z" fill="#DABFFF"></path><path d="M170.903717 170.619272m-56.873091 0a56.873091 56.873091 0 1 0 113.746182 0 56.873091 56.873091 0 1 0-113.746182 0Z" fill="#DABFFF"></path><path d="M170.903717 853.096362m-56.873091 0a56.873091 56.873091 0 1 0 113.746182 0 56.873091 56.873091 0 1 0-113.746182 0Z" fill="#DABFFF"></path><path d="M1251.492442 170.619272m-56.873091 0a56.873091 56.873091 0 1 0 113.746182 0 56.873091 56.873091 0 1 0-113.746182 0Z" fill="#DABFFF"></path><path d="M1251.492442 853.096362m-56.873091 0a56.873091 56.873091 0 1 0 113.746182 0 56.873091 56.873091 0 1 0-113.746182 0Z" fill="#DABFFF"></path></g></svg>
        
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


