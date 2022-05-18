 import { Navbar, Container, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton,Nav } from 'react-bootstrap'
 import  CreateSlots  from './Components/CreateSlots';
 import  PatientList  from './Components/PatientList';
 import  VacantList  from './Components/VacantList';
 import React from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./App.css";
 import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

 import Log_doc from "./containers/Login_doc";
 import SignUp_doc from "./containers/Sign_doc";
 import SignUp_pat from "./containers/Sign_pat";
 import SignUp_blood from "./containers/Sign_blood";
 import Log_pat from "./containers/Login_pat";
 import Log_blood from "./containers/Login_blood";
 import TopBar from "./containers/TopBar";

 function App(){ 

   return (
<Router>
<div className="App">
  
  <TopBar/>

  <div className="auth-wrapper">
    <div className="auth-inner">
      <Routes>
        {/* <Route exact path="/" element={<Home />} > */}
        <Route path="/sign-in-doc" element={<Log_doc />} />
        <Route path="/sign-in-pat" element={<Log_pat />} />
        <Route path="/sign-in-blood" element={<Log_blood />} />
        <Route path="/sign-up-doc" element={<SignUp_doc />} />
        <Route path="/sign-up-pat" element={<SignUp_pat />} />
        <Route path="/sign-up-blood" element={<SignUp_blood />} />
        <Route path="/" element={<CreateSlots/>}/>
        <Route path="/patient" element={<PatientList/>}/>
        <Route path="/vacant" element={<VacantList/>}/>
      </Routes>
    </div>
  </div>
</div>
</Router>

   );
 }

 export default App;
