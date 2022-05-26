import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { NavLink } from "react-router-dom";
import { patientDetailsData } from "./data.js";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       patientsList: patientDetailsData.getData()
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(id) {
    this.props.history.push(`/viewPatient/${id}`);
  }
  handleEdit(id) {
    this.props.history.push(`/editPatient/${id}`);
  }

  handleDelete(e) {
    patientDetailsData.deletePatient(e);
    this.setState({
      patientsList: patientDetailsData.getData(),
    })
  }

  render() {
    const {patientsList} = this.state;
    return (
      <div style={{ height: "100%" }}>
        <NavBar />
        <form style={{height: '100%'}}>
          {patientsList.length === 0 ? (
            <h1 style={{ justifyContent: "center", display: "flex", height: "100%", textAlign: "center", flexGrow: "1", alignItems: "center" }}>
              No Patients Found
            </h1>
          ) : (
            patientsList.map((patient) => {
              return (
                <div className="patient-list d-flex justify-content-between py-4 my-2 bg-light px-2" key={patient.id}>
                  <span>{patient.name}</span>
                  <div>
                    <button className="FormField__Button" href="#" onClick={() => this.handleView(patient.id)}>View</button>
                    <button className="FormField__Button" href="#" onClick={() => this.handleEdit(patient.id)}>Edit</button>
                  </div>
                </div>
              )
            })
          )}
        </form>
      </div>
    );
  }
}

export default AllPatients;
