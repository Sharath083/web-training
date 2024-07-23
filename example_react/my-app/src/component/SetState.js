import React, { Component } from "react";

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // increment(){
  //     this.state.count=this.state.count+1
  // }  this will not affect the value in constructor
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("call back", this.state.count) //this is called after the value is updated
    );

    console.log("normal", this.state.count); //this is called before the value is updated
  }

  decrement() {
    this.setState(
      { count: this.state.count - 1 },
      () => console.log("call back", this.state.count) //this is called after the value is updated
    );
    console.log("normal", this.state.count); //this is called before the value is updated
  }

  render() {
    return (
      <div>
        <p>Count = {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
        {/* increment method has 'this', we are using arrow function to call increment.check EventHandlerBind.js */}
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default SetState;
