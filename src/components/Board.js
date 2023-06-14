import React, { Component } from "react";
import Switch from "react-switch";
import BoardCard from "./BoardCard";
import {motion} from 'framer-motion';

export default class Board extends Component {
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
      <div className="mx-10 my-5">
      <label>
      <div className="text-[4.5vh] font-custom px-5 font-semibold inline-block ml-[5vh]">
        
        {/* Arrows */}
        <svg fill="#DABFFF" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M377.463,410.645c-0.333-0.398-33.05-40.237-50.234-86.893c-12.265-33.296-13.689-62.709-13.671-76.914h19.252 c3.375,0,6.492-2.102,8.194-5.024c1.692-2.922,1.702-6.672,0.028-9.604l-21.65-37.957c-0.791-1.387-1.912-2.548-3.221-3.364 l16.362-65.463c0.712-2.83,0.074-5.531-1.72-7.824c-1.794-2.303-4.55-3.346-7.463-3.346H190.759c-2.913,0-5.669,1.033-7.463,3.336 c-1.794,2.293-2.432,5.137-1.72,7.967l16.36,65.366c-1.309,0.816-2.428,1.903-3.218,3.288l-21.65,37.862 c-1.674,2.932-1.665,6.825,0.028,9.748c1.702,2.922,4.818,5.015,8.194,5.015h18.801c-0.534,14.205-2.943,48.301-13.484,76.914 c-14.483,39.314-50.918,86.9-51.279,87.372c-1.239,1.646-2.439,3.498-2.439,5.56v85.231c0,5.235,5.285,10.085,10.52,10.085 h227.282c5.234,0,8.42-4.851,8.42-10.085v-85.231C379.111,414.483,378.869,412.337,377.463,410.645z M311.207,133.196 l-14.205,56.821h-79.904l-14.205-56.821H311.207z M197.612,227.897l10.82-18.94h1.267H304.4h1.267l10.82,18.94H304.4h-94.701 H197.612z M360.171,493.06H151.829v-73.24c9.47-10.811,38.387-52.5,52.028-89.52c11.662-31.656,14.702-66.889,15.211-83.462h75.52 c-0.055,14.205,1.297,47.339,14.605,83.462c15.897,43.161,43.875,79.587,50.978,89.723V493.06z"></path> </g> </g> <g> <g> <path d="M285.46,29.025h-19.99V9.47c0-5.234-4.236-9.47-9.47-9.47s-9.47,4.236-9.47,9.47v19.555h-17.89 c-5.235,0-9.47,4.236-9.47,9.47c0,5.234,4.235,9.47,9.47,9.47h17.89v37.265c0,5.235,4.236,9.47,9.47,9.47s9.47-4.236,9.47-9.47 V47.966h19.99c5.234,0,9.47-4.236,9.47-9.47C294.93,33.261,290.694,29.025,285.46,29.025z"></path> </g> </g> </g></svg>
        
        The Board</div>
        </label>

        <Switch className="mb-[1.5vh]" onChange={this.handleChange} checked={this.state.checked} offColor="#4F518C" onColor="#4F518C" offHandleColor="#DABFFF" onHandleColor="#77DDEE" uncheckedIcon="" checkedIcon=""/>
        {this.state.checked?
         <motion.div
         initial={{y:250,opacity:0}}
         whileInView={{y:0,opacity:1,transition:{duration:1}}}
         viewport={{ once: true }}
        > 
          <BoardCard />
          </motion.div>
        :""}
     
      </div>
    );
  }
}
