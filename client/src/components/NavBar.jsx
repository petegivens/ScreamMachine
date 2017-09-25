import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

var NavBar = (props) => (
  <Navbar className='NavBar'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Scream Machine</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href='#'> Your Profile</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem  href="#">Login</NavItem>
      <NavItem  href="#"> Logout </NavItem>
    </Nav>
  </Navbar>
)

export default NavBar 
