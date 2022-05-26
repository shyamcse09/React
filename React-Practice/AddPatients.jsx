import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
    console.log('here', this.state)
    if (this.canBeSubmitted()) {
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date=new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Adding a Patient
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label">Name</label>
              <input type="text"
              name="name" id="name"
              value={this.state.name}
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">E-mail ID</label>
              <input type="text"
              value={this.state.email}
              name="email" id="email"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
              <input
              type="date"
              value={this.state.dob}
              name="dob" id="dob"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Location</label>
              <input type="text"
              value={this.state.location}
              name="location" id="location"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Mobile No</label>
              <input type="text" id="mobile"
              value={this.state.mobile}
              name="mobile"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <button name="register"
              className="FormField__Button" disabled={!isEnabled}>Register</button>
            </div>
            <div className="FormField">
              <button name="cancel"
              value="Cancel" className="FormField__Button"
              disabled={!isEnabled}
              onClick={this.handxleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;
