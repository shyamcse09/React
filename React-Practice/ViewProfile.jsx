import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {adminDetailsData} from "./data.js"
import "../App.css";




class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin : adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    
    const {admin} = this.state; 
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code to create labels for name,email,dob,mobileno and location */}
            <div id="name">
              Name - <span>{admin.name}</span>
            </div>
            <div id="email">
              Email -  <span>{admin.email}</span>
            </div>
            <div id="dob">
              Date of Birth - <span>{admin.dob}</span>
            </div>
            <div id="location">
              Location -  <span>{admin.location}</span>
            </div>
            <div id="mobileno">
              Mobile -  <span>{admin.mobileno}</span>
            </div>
            <div className="FormField">
              <input type="submit" name="cancel"
                value="Cancel" className="FormField__all__Button"
                onClick={this.handleClose}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;
