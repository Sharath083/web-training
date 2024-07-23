import React, { Component } from "react";
class ClassClick extends Component {
  clickFun() {
    alert("Button Clicked!");
  }
  render() {
    return (
      <button onClick={this.clickFun}>
        Class Click <br />
      </button>
      //click function does not have any 'this',
      // so no need to bind
    );
  }
}

export default ClassClick;
