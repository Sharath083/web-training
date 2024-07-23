import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      gender: "Male",
      mobileNumber: "",
    };
  }
  handleUserNmae = (event) => {
    this.setState({ username: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    alert(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNmae}
            maxLength={20}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                value="Male"
                checked={this.state.gender === "Male"}
                onChange={this.handleGender}
              />
              Male
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Female"
                checked={this.state.gender === "Female"}
                onChange={this.handleGender}
              />
              Female
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Other"
                checked={this.state.gender === "Other"}
                onChange={this.handleGender}
              />
              Other
            </label>
          </div>
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            type="tel"
            value={this.state.mobileNumber}
            // pattern="[6-9]{1}-[0-9]{9}"
            onChange={this.handleMobileNumber}
            maxLength={10}
            required={true}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Forms;
