import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient : patientDetailsData.viewPatientDetails(props.match.params.id)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const {patient} = this.state;
    console.log(patient)
    return (
      <div>
        <NavBar />
        {patient.id ? (
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
            >
              Viewing Patient
          </p>

          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div id="name">
                Name -  <span>{patient.name}</span>
              </div>
              <div id="email">
                Email - <span>{patient.email}</span>
              </div>
              <div id="dob">
               Date of Birth - <span>{patient.dob}</span>
              </div>
              <div id="location">
                Location - <span>{patient.location}</span>
              </div>
              <div id="mobile">
                Mobile - <span>{patient.mobile}</span>
              </div>
              <div className="FormField">
                <input type="submit" name="cancel"
                  value="Cancel" className="FormField__all__Button"
                  onClick={this.handleClose}/>
              </div>
            </form>
          </div>
        </div>
        ) : (
          <h1>No patients found</h1>
        )}
      </div>
    );
  }
}
export default ViewPatient;
