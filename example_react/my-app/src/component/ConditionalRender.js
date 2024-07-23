import React, { Component } from "react";
class ConditionalRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //Short Circuit  : to display message if true else nothing
    return this.state.isLoggedIn && <div>Welcome Sharath</div>;

    //ternary oper
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sharath</div>
    // ) : (
    //   <div>Welcome User</div>
    // );

    //variable
    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = "Welcome Sharath";
    // } else {
    //   msg = "Welcome User";
    // }
    // return <div>{msg}</div>;

    //if-else
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome Sharath</h1>;
    // } else {
    //   return <h1>Welcome User</h1>;
    // }
  }
}

export default ConditionalRender;
