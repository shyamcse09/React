import React, { Component } from "react";
import NavBar from "./NavBar";
import {appDetailsData} from "./data.js"

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     appointment : appDetailsData.getAppointmentDetails(props.match.params.appId)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
   const {appointment} = this.state;
   if(!appointment) {
     return <h1>No appointments found</h1>
   }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em"
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to display name, appdate, slot, description and disease */}
          <div id="name">
              Name - <span>{appointment.name}</span>
            </div>
            <div id="disease">
              Disease - <span>{appointment.disease}</span>
            </div>
            <div id="appdate">
              Date - <span>{appointment.appdate}</span>
            </div>
            <div id="slot">
              Slot - <span>{appointment.slot}</span>
            </div>
            <div id="description">
              Description - <span>{appointment.description}</span>
            </div>
            <div className="FormField">
              <button name="cancel"
                className="FormField__all__Button"
                onClick={this.handleClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;
