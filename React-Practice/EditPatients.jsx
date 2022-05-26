import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import {Route} from "react-router-dom";

class EditPatient extends Component {
  constructor(props) {
    super(props);
      const patient = patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {

    if (this.canBeSubmitted()) {

      e.preventDefault();

      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );

      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {

    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { patient } = this.state;
    if (!patient) {
      return (<div>Patient doesnot exist</div>)
    }


    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Edit patient
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
              <input type="text" id="email"
              value={this.state.email}
              name="email"
              className="FormField__Input"
              onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label">Date of Birth</label>
              <input
              type="text"
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
              <div className="SideRow">
               <button name="register"
                 className="FormField__Button" >Register</button>
              </div>
              <div className="SideRow">
                <button name="cancel"
                 className="FormField__Button"
                onClick={this.handleCancel}>Cancel</button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default EditPatient;
