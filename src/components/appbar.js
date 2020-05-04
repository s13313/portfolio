import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
import "../components/style.css"
const appbar = () => {
  return (
    <div className="appbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="mr-sm-3" href="/">
          🌓
        </Navbar.Brand>
        {/* <Navbar.Brand href="">
          <img
          className="navbar-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZKO986ttwbUEjHNWwDbJmGepsjfy7_0fj1vbCRnLdS-byGevC"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand> */}
        {/* <p style={{color=red}}>hey there</p> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-0"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav.Link href="./projects" bg="danger" variant="danger">
              Projects
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/hamed.jenabi"
              bg="danger"
              variant="danger"
            >
              Hire Me
            </Nav.Link>
            <Nav.Link href="/" bg="danger" variant="danger">
              About
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/hamed.jenabi">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default appbar
