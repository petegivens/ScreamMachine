import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: true
		};
	}

	close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
  	return (
  		<div>
  			<Modal>
  				<Button
	          bsStyle="primary"
	          bsSize="large"
	          onClick={this.open}>
          	Login
        	</Button>
  				<Modal.Body>
  					<p>Hi, I'm the login modal. When Julie gets her shit together, I'll do some cool stuff.</p>
  				</Modal.Body>
  			</Modal>
  		</div>
  	);
  }
}

export default Login;