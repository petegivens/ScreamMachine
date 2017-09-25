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
      <NavItem onClick={props.profile} href='#'> Your Profile</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem onClick={props.login} href="#">Login</NavItem>
      <NavItem onClick={props.logout} href="#"> Logout </NavItem>
    </Nav>
  </Navbar>
)

export default NavBar 
