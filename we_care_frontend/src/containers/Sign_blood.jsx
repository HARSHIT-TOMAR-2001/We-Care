import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up As Donor</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label>Contact Details</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Age"
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <Form.Select>
            <option>...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label>Blood Group</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Blood Group"
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
    )
  }
}