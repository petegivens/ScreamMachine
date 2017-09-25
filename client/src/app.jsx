import React, {Component} from 'react';
import graph, {getMic} from '../models/micGraph';
import Button from './components/Button.jsx'; 
import NavBar from './components/NavBar.jsx';
import {Row,Grid,Col} from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      scream: false,
      text: 'Start',
      mic: null,
      page: 'scream',
      screamLevel: 0,
      displayScore: false
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.micHandler = this.micHandler.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.profile = this.profile.bind(this);
    setInterval(this.micHandler, 250); 
  }

  micHandler() {
    this.setState({mic:getMic()});
    var micLevel = this.state.mic.getLevel();
    if(micLevel > this.state.screamLevel) {
      this.setState({screamLevel: micLevel});
    }
    //console.log(micLevel); // for debugging 
    if	(this.state.scream) {
    //console.log(micLevel); // for debugging 
      if (micLevel < 0.15) {
	      this.setState({scream: false});
      } 
    } else if (micLevel > 0.15) {
      this.setState({scream: true})
    }
  }

  toggleClick(e) {
    e.preventDefault();
    //if button text is 'Start' or 'Scream Again'
    if (this.state.text === 'Start' || this.state.text === 'Scream Again') {
      //set button text to 'Stop'
      this.setState({text: 'Stop'});
      this.setState({displayScore: false});
      this.state.mic.start(); 
      //else if button text is 'Stop'
    } else if (this.state.text === 'Stop') {
      //set button text to 'Scream Again'
      this.setState({text: 'Scream Again'});
      //store scream in database
      //display highest volume
      this.setState({displayScore: true})
      this.state.mic.stop(); 
    }
  }

  logout() {
  // should logout somehow 
  }

  login() {
  //should login or signup user
  }

  profile() {
  //should show profile of user
  }

  render() {
    return (
      <Grid>
	      <Row> supBitches </Row>
	      <Row>
	        <NavBar login={this.login} logout={this.logout} profile={this.profile} />
	      </Row>	
	      <Row style={{height: 375}} className="gif" >
	      <Col md={3}>
	      {this.state.displayScore ? <div>Score: {Math.floor(this.state.screamLevel * 1000)}</div> : <div> </div>} 
	      </Col>
	      <Col md={6}>	
	        { this.state.scream ? <img src="../models/cat.gif" alt="dancing cat" /> : <div> Scream </div> }
	      </Col>	
	    </Row>
	    <Row>
	      <Col md={2} mdOffset={5}> 
	        <Button func={this.toggleClick} state={this.state.text}/>
	      </Col>
	    </Row> 
	    <Row>
	      <Col md={8} mdOffset={2} id='ScreamMeter'> </Col>
	    </Row>	
     </Grid> );
    }
  }

export default App;

