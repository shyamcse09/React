import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={Medilogo} alt="logo" width="68" height="auto"/> DMRD</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ReactLink to="/addPatient" className="FormTitle__Link">
                  Add Patient
                </ReactLink>
              </NavItem>
              <NavItem>
                <ReactLink to="/allPatients" className="FormTitle__Link">
                  All Patient
                </ReactLink>{" "}
              </NavItem>
              <NavItem>
                <ReactLink to="/bookAppointment" className="FormTitle__Link">
                  Book Appointment
                </ReactLink>{" "}
              </NavItem>
              <NavItem>
                <ReactLink to="/allAppointments" className="FormTitle__Link">
                  All Appointment
                </ReactLink>{" "}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <ReactLink to="/viewProfile">View Profile</ReactLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <ReactLink to="/sign-in">Logout</ReactLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
}
