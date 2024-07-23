import React, { Component } from "react";

class EventHandlerBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Before ckick" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ message: "Button Clicked" });
  }

  //   handleClick = () => {
  //     this.setState({ message: "Button Clicked" });
  //   } without bind in constructor can use this q
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Click Me</button>
        {/* <button onClick={()=>this.handleClick()}>Click Me</button>
                <button onClick={this.handleClick.bind()}>Click Me</button> */}
      </div>
    );
  }
}

export default EventHandlerBind;
