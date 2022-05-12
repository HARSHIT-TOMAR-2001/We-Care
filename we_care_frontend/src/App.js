import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./containers/Login";
import SignUp_doc from "./containers/Sign_doc";
import SignUp_pat from "./containers/Sign_pat";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              weCare
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up-doc"}>
                    Doctor SignUP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up-pat"}>
                    Patient SignUP
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up-doc" element={<SignUp_doc />} />
              <Route path="/sign-up-pat" element={<SignUp_pat />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
