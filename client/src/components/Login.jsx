import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as UserModel from '../../models/users.js';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: props.show,
      buttonText: 'Login'
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
    console.log(this);
    UserModel.userLogin('/login', username, password).then(function(err, result) {
      console.log(this);
      this.setState({buttonText: 'Logout'});
      this.closeModal();
    });
  }

  render() {
  	return (
  		<div className="static-modal">
  			<Button onClick={this.openModal}>{this.state.buttonText}</Button>
    		<Modal show={this.state.showModal}>
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
        		<Button onClick={this.closeModal}>Close</Button>
        		<Button bsStyle="primary" onClick={this.login}>Sign In</Button>
      		</Modal.Footer>
      	</Modal>
  		</div>
  	);
  }
}

export default Login;