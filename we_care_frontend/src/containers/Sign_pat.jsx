import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
export default class SignUpAsDoc extends Component {
  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
    this.lastRef = React.createRef();
    this.contactRef = React.createRef();
    this.genderRef = React.createRef();
    this.ageRef = React.createRef();
    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.emailRef.current.value);
    axios
      .post(`http://localhost:4000/api/auth/patient/signup`, {
        firstname: this.firstRef.current.value,
        lastname: this.lastRef.current.value,
        contact_details: this.contactRef.current.value,
        gender: this.genderRef.current.value,
        age: this.ageRef.current.value,
        email: this.emailRef.current.value,
        password: this.passRef.current.value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    const genders = [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Others",
        value: "others",
      },
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up As Patient</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            ref={this.firstRef}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" ref={this.lastRef} />
        </div>
        <div className="mb-3">
          <label>Contact Details</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Contact Number"
            ref={this.contactRef}
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Age"
            ref={this.ageRef}
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <Form.Select>
          {genders.map((optionGen) => (
              <option ref={this.genderRef} value={optionGen.value}>
                {optionGen.label}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            ref={this.emailRef}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref={this.passRef}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
