import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Nav defaultActiveKey="/" as="ul" className="white-font-color">
        <Nav.Link href="/" className="grey-font-color name-logo">KuangHsuan Lee</Nav.Link>
        <Nav className="mr-auto">
        </Nav>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav2" />
          <Navbar.Collapse id="basic-navbar-nav2">
            <NavLink to="/" className="nav-link text-uppercase grey-font-color">home</NavLink>
            {/* <Nav.Link href="#about" className="text-uppercase grey-font-color">about</Nav.Link>
            <Nav.Link href="#project" className="text-uppercase grey-font-color">project</Nav.Link>
            <Nav.Link href="#blog" className="text-uppercase grey-font-color">blog</Nav.Link>
            <Nav.Link href="#book" className="text-uppercase grey-font-color">book</Nav.Link>
            <Nav.Link href="#course" className="text-uppercase grey-font-color">course</Nav.Link> */}
            <NavLink to="/blog" className="nav-link text-uppercase grey-font-color">blog</NavLink>
            <NavLink to="/book" className="nav-link text-uppercase grey-font-color">book</NavLink>
            <NavLink to="/course" className="nav-link text-uppercase grey-font-color">course</NavLink>
            {/* <Nav.Link href="#contact" className="text-uppercase grey-font-color">contact</Nav.Link> */}
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    )
  }

}
export default Header;