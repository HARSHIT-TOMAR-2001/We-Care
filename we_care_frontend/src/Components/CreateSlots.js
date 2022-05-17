import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class CreateSlots extends Component {
  render() {
   
    return (
          
      <form  id="form_login">
        <h3 >Create Slot as a Doctor 🥼</h3>
        <div className="mb-3">
          <label > Doctor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div> 

        <div className="mb-3">
          <label >Maximum Patient Limit</label>
          <input
           
            type="number" id="quantity" name="quantity" min="1" max="100"
            className="form-control"
            placeholder=" (between 1 and 100)"
          />
        </div> 

        <div className="mb-3">
          <label >Slot Start Time</label>
          <input
            type="time"
            className="form-control"
            placeholder="First name"
          />
        </div> 

        <div className="mb-3">
          <label > Slot End Time</label>
          <input
            type="time" 
            className="form-control"
            placeholder="First name"
          />
        </div>
        
       
        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
       
      </form>
      
   
    );
  }
}