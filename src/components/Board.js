import React, { Component } from "react";
import Switch from "react-switch";

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
      <span className="text-[5vh] font-custom px-5 font-semibold">The Board</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} offColor="#4F518C" onColor="#4F518C" offHandleColor="#DABFFF" onHandleColor="#77DDEE" uncheckedIcon="" checkedIcon=""/>
        {this.state.checked?
        <h1>On State</h1>:""}
      </label>
      </div>
    );
  }
}
