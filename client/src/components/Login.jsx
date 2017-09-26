import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
    this.setState({showModal: true});
  }

	closeModal() {
    this.setState({showModal: false});
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
        		To save your scream data to your profile, please log in first. 
      		</Modal.Body>
      		<Modal.Footer>
        		<Button onClick={this.closeModal}>Close</Button>
        		<Button bsStyle="primary">Sign In</Button>
      		</Modal.Footer>
      	</Modal>
  		</div>
  	);
  }
}

export default Login;