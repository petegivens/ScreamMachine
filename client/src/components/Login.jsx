import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as LoginModel from '../../models/login.js';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
      text: 'Please log in with your username and password.'
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
    this.login = this.login.bind(this);
	}

	openModal() {
    this.setState({showModal: true});
  }

	closeModal() {
    this.setState({showModal: false})
  }

  login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    LoginModel.userLogin('/login', username, password).then(function(err, result) {
      if (err) {
        this.setState({text: 'We were unable to locate your account. Please try again or sign up for an account.'});
      } else {
      this.closeModal();
      }
    }).then(function() {this.closeModal()});
  }

  render() {
  	return (
  		<div className="static-modal">
  			<Button onClick={this.openModal}>Login</Button>
    		<Modal show={this.state.showModal}>
      		<Modal.Header>
        		<Modal.Title>Login</Modal.Title>
      		</Modal.Header>
      		<Modal.Body>
            {this.state.text}
            <label>Username:</label>
            <input placeholder='username' id='username'></input>
            <label>Password:</label>
            <input placeholder='password' id='password'></input>
      		</Modal.Body>
      		<Modal.Footer>
        		<Button onClick={this.closeModal}>Close</Button>
        		<Button bsStyle="primary" onClick={this.login}>Sign In</Button>
      		</Modal.Footer>
      	</Modal>
  		</div>
  	);
  }
}

export default Login;