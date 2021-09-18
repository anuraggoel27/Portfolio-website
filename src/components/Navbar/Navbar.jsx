// import React from "react";
// // import Container from "react-bootstrap";

// import { Navbar, Nav, Container} from "react-bootstrap";
// import "./Navbar.css";
// const SideNavbar = () => {
//   return (
//     <div className="navbar__container">
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">NoOne Codes</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             {/* <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.I href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav> */}
//             <Nav>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link eventKey={2} href="#contact">
//                 Contact
//               </Nav.Link>
//               <Nav.Link eventKey={3} href="#skills">
//                 Skills
//               </Nav.Link>
//               <Nav.Link eventKey={4} href="#projects">
//                 Projects
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default SideNavbar;
import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMinus } from "react-icons/ai";
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div>
      <div
        className={
          collapsed
            ? "custom-navbar navbar-collapsed"
            : "custom-navbar navbar-expanded"
        }
      >
        <h1 className="navbar__heading">Navbar</h1>
      </div>

      <button className="toggler-button" onClick={handleClick}>
        <AiOutlineMinus className={collapsed ? "top" : "top top-expanded"} />
        <AiOutlineMinus
          className={collapsed ? "middle" : "middle middle-expanded"}
        />
        <AiOutlineMinus
          className={collapsed ? "bottom" : "bottom bottom-expanded"}
        />
      </button>
    </div>
  );
};

export default Navbar;
