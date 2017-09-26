import React from 'react';
import {Modal, Button} from 'react-bootstrap';

var Login = (props) => (

      <div className="static-modal">
	<Modal show={props.showModal}>
	  <Modal.Header>
	    <Modal.Title>Login</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
	    <label>Username:</label>
	    <input placeholder='username' id='username'></input><br/>
	    <label>Password:</label>
	    <input placeholder='password' id='password'></input>
	  </Modal.Body>
	  <Modal.Footer>
	    <Button onClick={props.closeModal}>Close</Button>
	    <Button bsStyle="primary" onClick={props.login}>Sign In</Button>
	  </Modal.Footer>
	</Modal>
      </div>
)

export default Login;
