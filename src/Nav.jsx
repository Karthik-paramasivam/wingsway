// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import logo from "./Images/WingsWay logo.png";

// function NavMenu() {
//   return (
//     <Navbar expand="lg" className="bg-body-white">
//       <Container className="d-flex justify-content-between align-items-center  mt-2">
//         {/* Logo on the left */}
//         <Navbar.Brand href="#">
//           <img src={logo} className="img-fluid w-25" alt="WingsWay logo" />
//           <Button style={{background: "#0d278e"}}>Contact us</Button>

//         </Navbar.Brand>

//         {/* "Contact us" Button on the right */}
//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu;

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "./Images/WingsWay logo.png";

// function NavMenu() {
//   return (
//     <Navbar expand="lg" className="bg-body-white">
//       <Container className="d-flex justify-content-between align-items-center mt-2">
//         {/* Logo on the left */}
//         <Navbar.Brand href="#">
//           <img src={logo} className="img-fluid w-25" alt="WingsWay logo" />
//         </Navbar.Brand>

//         {/* "Contact us" Button on the right */}
//         <Button
//           style={{ background: "#0d278e" }}
//           className="ms-auto"
//         >
//           Contact us
//         </Button>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu;

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "./Images/WingsWay logo.png";

// function NavMenu() {
//   return (
//     <Navbar expand="lg" className="bg-body-white">
//       <Container>
//         {/* Logo on the left */}
//         <Navbar.Brand href="#">
//           <img src={logo} className="img-fluid w-25" alt="WingsWay logo" />
//           <Button
//             style={{ background: "#0d278e" }}
//           >
//             Contact us
//           </Button>

//         </Navbar.Brand>

//         {/* Spacer to push content to the right */}

//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu;

import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "./Images/WingsWay logo.png";
// import "./App.css";

// function NavMenu() {
//   return (
//       <Container className="container-fluid">
//         {/* Logo on the left */}
//         <div className="row">
//           <div className="col-6 border border-danger">
//             <img
//               src={logo}
//               className="img-fluid border border-success responsive-width"
//               alt="WingsWay logo"
//               />
//           </div>
//           <div className="col-6 border border-danger">
//             {/* Button on the right */}
//             <div className="border border-primary text-end">
//               <Button style={{ background: "#0d278e" }}>Contact us</Button>
//             </div>
//           </div>
//         </div>
//       </Container>
    
//   );
// }

// export default NavMenu;


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
      
//       <Container fluid>
//         <div className="w-25">
//       <img
//               src={logo}
//               className="img-fluid border border-success"
//               alt="WingsWay logo"
//               />
//               </div>
//         <Navbar.Toggle aria-controls="navbarScroll" />
      
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             {/* <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
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
//             <Button variant="outline-success">Search</Button>
//           </Form> */}
//           <Button style={{ background: "#0d278e" }}   className="w-100 w-lg-25 btn-lg"
//           >Contact us</Button>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./Images/WingsWay logo.png";
import "./App.css";

function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container>
      <img
  src={logo}
  className="img-fluid responsive-logo"
  alt="WingsWay logo"
/>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Navigation Links Here */}
          </Nav>
          <Button
            style={{ background: "#0d278e" }}
            className="btn-lg w-100 d-lg-none Contactbutton" // 100% width only on collapsed
          >
            Contact us
          </Button>
          <Button
            style={{ background: "#0d278e" }}
            className="btn-lg  d-none d-lg-inline Contactbutton" // Normal width on large screens
          >
            Contact us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
