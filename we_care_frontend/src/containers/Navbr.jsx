import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";
export default class Navbr extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <DropdownButton id="dropdown-appoint" title="💊 Appointment">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in-pat"}>
                  Log In
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-pat"}>
                  SignUP
                </Link>
              </li>
            </DropdownButton>
            <DropdownButton id="dropdown-blood" title="🥼 Doctor">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in-doc"}>
                  Log In
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-doc"}>
                  SignUP
                </Link>
              </li>
            </DropdownButton>
            <DropdownButton id="dropdown-blood" title="🩸 Blood Bank">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in-blood"}>
                  login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-blood"}>
                  Sign Up
                </Link>
              </li>
            </DropdownButton>
          </div>
        </div>
      </nav>
    )
  }
}