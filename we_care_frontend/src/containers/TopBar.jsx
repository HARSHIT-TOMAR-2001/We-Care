import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbr from "./Navbr";
import styles from'../containers/TopBar.module.css'
export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <h1 className="fixed-top" id="logo_head">
          🩺weCare
        </h1>
        <Navbr />
        <div className="seekBlood">
          <img className="blood-logo" src="blood bottle.png" alt="Blood logo" />
          <Link
            className="nav-link seek_b"
            to="/home"
          >
            Seek Blood
          </Link>
        </div>
      </div>
    );
  }
}
