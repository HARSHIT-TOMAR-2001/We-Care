import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up As Doctor</h3>
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
          <label>Degree</label>
          <Form.Select>
            <option>...</option>
            <option>MBBS</option>
            <option>BDS</option>
            <option>BAMS</option>
            <option>BUMS</option>
            <option>BHMS</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label>Specialisation (MD/MS)</label>
          <Form.Select>
            <option>...</option>
            <option>Dermatology, Venerology and Leprosy (MS)</option>
            <option>Ear, Nose and Throat (MS)</option>
            <option>General Medicine (MD)</option>
            <option>General Surgery (MS)</option>
            <option>Gynaecology (MS)</option>
            <option>Psychiatry (MD)</option>
            <option>Skin and Venereal diseases (MD)</option>
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
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Hospital Address"
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
    );
  }
}
