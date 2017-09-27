import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

var NavBar = (props) => (
  <Navbar className='NavBar' onSelect={props.func} >
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Scream Machine</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={'profile'} href='#'> Your Profile</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem  eventKey={'login'} href="#">{props.buttonText}</NavItem>
      <NavItem  eventKey={'signup'} href="#">Sign Up</NavItem>
    </Nav>
  </Navbar>
)

export default NavBar 
