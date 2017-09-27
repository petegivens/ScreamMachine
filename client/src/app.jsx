import React, {Component} from 'react';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Scream from './components/Scream.jsx';
import Profile from './components/Profile.jsx';
import {Row,Grid,Col,Button} from 'react-bootstrap';
import axios from 'axios';
import * as UserModel from '../models/users.js';
        
class App extends React.Component {        

  constructor() {
    super();
    this.state = {
      page: 'scream',
      showSignup: false,
      showLogin: false,
      showSignup: false,
      buttonText: 'Login',
      user: 'luig0',
    };
    this.navClickHandler = this.navClickHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    
  }

  closeModal() {
    this.setState({
      showLogin: false, 
      showSignup: false
    });
  }

  login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(this);
    UserModel.userLogin('/login', username, password).then(function(err, result) {
      console.log(this);
      this.setState({
      	buttonText: 'Logout',
      	user: username
      });
      this.closeModal();
    });
  }

  signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    console.log(this);
    UserModel.addUser('/addUser', username, password, firstname, lastname).then(function(err, result) {
      console.log(this);
      this.closeModal();
    });
  }

  navClickHandler(eventKey) {
    if (eventKey === 'logout') {
      //should logout somehow (MAGIC, obviously)
    } else if (eventKey === 'login') {
      //displays login modal
      this.setState({showLogin: true});
    } else if (eventKey === 'signup') {
      //displays signup modal
      this.setState({showSignup: true});
    } else if (eventKey === 'profile') {
      //renders profile page instead of scream page
      this.setState({page: 'profile'});
    }
  }    

  render() {
    return (
      <Grid>
				<Row> supBitches </Row>
				<Row><Login closeModal={this.closeModal} showLogin={this.state.showLogin} login={this.login} /></Row>
				<Row> <Signup closeModal={this.closeModal} showSignup={this.state.showSignup} signup={this.signup}/> </Row>
				<Row>
				  <NavBar buttonText={this.state.buttonText} func={this.navClickHandler} />
				</Row>
				<Row>
				  {this.state.page === 'scream' ? 
				  <div>
				  	<Scream user={this.state.user}/>
					</div> :
					<Profile user={this.state.user} />}
				</Row>
      </Grid> );
  }
}
export default App;

