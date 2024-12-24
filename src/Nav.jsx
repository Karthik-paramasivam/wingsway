// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from "./Images/WingsWay logo.png";

// function NavMenu() {  
//   return (
//     <Navbar expand="lg" className="bg-body-white">
//       <Container  className='border border-danger'>
//         <Navbar.Brand href="#"><img src={logo} className="img-fluid w-25 "  alt="WingsWay logo" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             {/* <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link> */}
//             {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown> */}
//             {/* <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link> */}
//           </Nav>
//           {/* <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Contact us</Button>
//           </Form> */}

//         </Navbar.Collapse>
//                   <Button style={{background:"#0d278e !important"}}>Contact us</Button>

//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu; 

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "./Images/WingsWay logo.png";

function NavMenu() {  
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container className="d-flex justify-content-between align-items-center  mt-2">
        {/* Logo on the left */}
        <Navbar.Brand href="#">
          <img src={logo} className="img-fluid w-25" alt="WingsWay logo" />
        </Navbar.Brand>
        
        {/* "Contact us" Button on the right */}
        <Button style={{background: "#0d278e"}}>Contact us</Button>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
