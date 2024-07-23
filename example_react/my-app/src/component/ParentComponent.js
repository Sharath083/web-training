import React, { Component } from "react";
import ChildCompo from "./ChildCompo";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: "PARENT",
    };
    this.greetings = this.greetings.bind(this);
  }
  greetings(child) {
    alert(`Hello ${this.state.parent} from ${child}`);
  }
  render() {
    return (
      <div>
        <ChildCompo greet={() => this.greetings("Child")}></ChildCompo>
      </div>
    );
  }
}

export default ParentComponent;
