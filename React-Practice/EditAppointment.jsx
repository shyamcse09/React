import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {appDetailsData} from "./data.js"

import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment  = appDetailsData.getAppointmentDetails(props.match.params.appId) || undefined;
    this.state = {
      name: appointment.name|| "",
      disease: appointment.disease||"",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment:appointment
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    
    console.log("Details",this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description)
      if(true) {
      e.preventDefault();
      
      appDetailsData.edit(
         this.state.appointment.appId,
         this.state.name,
         this.state.disease,
         this.state.appdate,
         this.state.slot,
         this.state.description
        );
      this.props.history.push("/allAppointments");
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
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
    const {appointment} = this.state;
    console.log(appointment)
    if(!appointment) {
    return (<h1>No appointments Found</h1>);
    }
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
            Edit Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
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
                <label className="FormField__Label">Enter your disease</label>
                <input type="text" id="disease"
                value={this.state.disease}
                name="email"
                className="FormField__Input"
                onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Date</label>
                <input id="appdate"
                type="text"
                value={this.state.appdate}
                name="appdate"
                className="FormField__Input"
                onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Slots</label>
                <input type="text" id="slot"
                value={this.state.slot}
                name="slot"
                className="FormField__Input"
                onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Description</label>
                <input type="text" id="description"
                value={this.state.description}
                name="description"
                className="FormField__Input"
                onChange={this.handleChange}
                />
              </div>
              <div className="SideRow">
               <button  name="register"
                 className="FormField__Button"
                >Submit</button>
                </div>
                <div className="SideRow">
                <button  name="cancel"
                className="FormField__Button"
                onClick={this.handleCancel} >Cancel</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAppointment;
