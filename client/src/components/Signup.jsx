import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as UserModel from '../../models/users.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.signup = this.signup.bind(this);
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false})
  }

  signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    console.log(this);
    UserModel.addUser('/addUser', username, password, firstname, lastname).then(function(err, result) {
      //console.log(this);
      this.closeModal();
    });
  }

  render() {
    return (
      <div className="static-modal">
        <Button onClick={this.openModal}>Sign Up</Button>
        <Modal show={this.state.showModal}>
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
	          <input placeholder='password' id='password'></input></Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
            <Button bsStyle="primary" onClick={this.signup}>Sign Up</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Signup;
