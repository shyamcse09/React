import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {adminDetailsData} from "./data.js";
import "../App.css";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      adminDetails: adminDetailsData.getData()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('here', adminDetailsData.getData())
    const {adminDetails} = this.state;
    let validCredentials = false;
    if (this.canBeSubmitted()) {
      adminDetails.map((admin) => {
        if(this.state.email === admin.email && this.state.password === admin.password) 
        {
          let currentUser=admin.adminId;
          validCredentials = true
          adminDetailsData.setCurrentUser(admin.adminId);
          this.props.history.push("/allpatients");
          return 
        }  
      })
      if(!validCredentials) {
        alert("please enter valid credentials")
        this.props.history.push("/sign-in");
      }
    }
  }
  canBeSubmitted() {
    const { email, password, adminDetails } = this.state;
    return email.length > 0 && password.length > 0;
  }  
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label">E-mail Address</label>
              <input type="text" 
              value={this.state.email} 
              name="email" 
              className="FormField__Input"
              onChange={this.handleChange}
              id="email"
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Password</label>
              <input type="password"
              value={this.state.password}
              name="password"
              className="FormField__Input"
              onChange={this.handleChange}
              id="password"
              />
            </div>
            <div className="FormField">
              <button
              name="login"
              className="FormField__Button"
              disabled={!isEnabled}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
