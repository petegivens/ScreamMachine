import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const Signup = (props) => (
  <div className="static-modal">
    <Modal show={props.showSignup}>
      <Modal.Header>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <label>First Name:</label>
        <input placeholder='FirstName' id='firstname'></input><br/>
        <label>Last Name:</label>
        <input placeholder='LastName' id='lastname'></input><br/>
        <label>Username:</label>
        <input placeholder='username' id='username'></input><br/>
        <label>Password:</label>
        <input placeholder='password' id='password'></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
        <Button bsStyle="primary" onClick={props.signup}>Sign Up</Button>
      </Modal.Footer>
    </Modal>
  </div>
)

export default Signup;
