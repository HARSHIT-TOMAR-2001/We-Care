 import './App.css';
 import { Navbar, Container, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
 import {
   BrowserRouter,
   Routes,
   Route,
   Link
 } from "react-router-dom";
 import  CreateSlots  from './Components/CreateSlots';
 import  PatientList  from './Components/PatientList';
 import  VacantList  from './Components/VacantList';
  

 function App(){ 

   return (
     <BrowserRouter>
     <div className="App">
      
      <>
      <Navbar bg="primary" variant="dark">
  
     <Container>
     <Navbar.Brand href="#home">WE CARE !</Navbar.Brand>
    
     <Nav className="m-auto" >
      
       <Nav.Link as={Link} to="/">Create Slot</Nav.Link>
       <Nav.Link as={Link} to="/patient">Patient List</Nav.Link>
       <Nav.Link as={Link} to="/vacant">All Created Slots</Nav.Link>
    
     
     </Nav>
   
     </Container>
   </Navbar>
      </>
     
     

   <div>
     <Routes>
        <Route path="/" element={<CreateSlots/>}/>
        <Route path="/patient" element={<PatientList/>}/>
        <Route path="/vacant" element={<VacantList/>}/>
      
     </Routes>
   </div>
     </div>
     </BrowserRouter>
   );
 }

 export default App;