import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {adminDetailsData} from "./data.js"
import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
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

    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
        );
      this.setState({name: e.target.value});
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location


    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4

    );
  }

  render() {
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
              <label className="FormField__Label">Username</label>
              <input type="text" id="uname"
              name="uname"
              value={this.state.uname}
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">E-mail ID</label>
              <input type="text" id="email"
              value={this.state.email}
              name="email"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Password</label>
              <input type="password" id="password"
              value={this.state.password}
              name="password"
              className="FormField__Input"
              onChange={this.handleChange}/>
            </div>
            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
              {/* <DatePicker
              selected={ this.state.dob }
              onChange={ this.handleDateChange }
              name="dob"
              dateFormat="MM/dd/yyyy" /> */}
              <input type="date"
              name="dob" id="dob"
              value={this.state.dob}
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Mobile No</label>
              <input type="text" id="mobileno"
              value={this.state.mobileno}
              name="mobileno"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Location</label>
              <input type="text" id="location"
              value={this.state.location}
              name="location"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <button name="register" v
                alue="Register"
                className="FormField__Button">
                  Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
