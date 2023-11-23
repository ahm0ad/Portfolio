import "./NavbarMenu.css";
import React from 'react'
import Logo from "../Images/code2go2.png";

import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';


const NavbarMenu = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-black">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} className="w-50 rounded-circle" alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className=" text-warning-emphasis fs-4 p-5">Home</Nav.Link>
                  <Nav.Link href="#action2" className=" text-warning-emphasis fs-4 p-5">Projecte</Nav.Link>
                  <Nav.Link href="#action2" className=" text-warning-emphasis fs-4 p-5">Skills</Nav.Link>
                  <Nav.Link href="#action2" className=" text-warning-emphasis fs-4 p-5">Contact</Nav.Link>
                  <NavDropdown
                    className=" text-warning-emphasis fs-4 p-5"
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavbarMenu;