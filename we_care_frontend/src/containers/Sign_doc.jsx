import React, { Component, useRef } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
export default class SignUpAsPatient extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.contactRef = React.createRef();
    this.degRef = React.createRef();
    this.specRef = React.createRef();
    this.cityRef = React.createRef();
    this.addRef = React.createRef();
    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:4000/api/auth/doctor/signup`, {
        name: this.nameRef.current.value,
        contact_details: this.contactRef.current.value,
        degree: this.degRef.current.value,
        specialization: this.specRef.current.value,
        city: this.cityRef.current.value,
        address: this.addRef.current.value,
        email_id: this.emailRef.current.value,
        password: this.passRef.current.value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    const degrees = [
      {
        label: "MBBS",
        value: "mbbs",
      },
      {
        label: "BAMS",
        value: "bams",
      },
      {
        label: "BDS",
        value: "bds",
      },
      {
        label: "BUMS",
        value: "bums",
      },
    ];

    const specializations = [
      {
        label: "Ear, Nose, Tongue",
        value: "ent",
      },
      {
        label: "Gastro",
        value: "gastro",
      },
      {
        label: "BDS",
        value: "bds",
      },
      {
        label: "BUMS",
        value: "bums",
      },
      {
        label: "BUMS",
        value: "bums",
      },
      {
        label: "BUMS",
        value: "bums",
      },
      {
        label: "BUMS",
        value: "bums",
      },
      {
        label: "BUMS",
        value: "bums",
      },
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up As Doctor</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            ref={this.nameRef}
          />
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
          <label>Degree</label>
          <Form.Select>
            {degrees.map((optionDeg) => (
              <option ref={this.degRef} value={optionDeg.value}>
                {optionDeg.label}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="mb-3">
          <label>Specialisation (MD/MS)</label>
          <Form.Select>
            {specializations.map((optionSpec) => (
              <option ref={this.specRef} value={optionSpec.value}>
                {optionSpec.label}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Certificate</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            ref={this.cityRef}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Hospital Address"
            ref={this.addRef}
          />
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
