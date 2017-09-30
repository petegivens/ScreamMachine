import React from 'react';
import graph, {getMic, getFreq} from '../../models/micGraph';
import ScreamButton from './Button.jsx'; 
import {Row,Grid,Col,Button} from 'react-bootstrap';
import axios from 'axios';

class Scream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scream: false,
      text: 'Start',
      mic: null,
      freqArray: [0,0,0],
      displayScore: false,
      screamLevel: 0,
      micRounds: 0
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.micHandler = this.micHandler.bind(this);
    this.saveScream = this.saveScream.bind(this);
    setTimeout(this.micHandler,250);
  }

  micHandler() {
    this.setState({mic:getMic()});
    var freq = getFreq();
    this.state.freqArray[0] += freq[0]; 
    this.state.freqArray[1] += freq[1]; 
    this.state.freqArray[2] += freq[2]; 
    this.state.micRounds++; 
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
    if(this.state.text === 'Stop') {
      setTimeout(this.micHandler, 250);
    }
  }

  saveScream() {
    var context = this;
    axios.post('/addScream', {
      params: {
	      volume: context.state.screamLevel,
	      username: context.props.user,
	      lowFreq: context.state.freqArray[0]/context.state.micRounds,
	      midFreq: context.state.freqArray[1]/context.state.micRounds,
	      highFreq: context.state.freqArray[2]/context.state.micRounds
        }
     })
      .then((res) => {
      context.setState({freqArary: [0,0,0]});
			context.setState({micRounds: 0});
    })
    .catch(function(error) {
      console.log('App.jsx, Failed to save: ', error);
    })
   }

  toggleClick(e) {
    e.preventDefault();
    //if button text is 'Start' or 'Scream Again'
    if (this.state.text === 'Start' || this.state.text === 'Scream Again') {
      //set button text to 'Stop'
      this.setState({text: 'Stop'});
      this.setState({displayScore: false});
      this.setState({screamLevel: 0});
      this.state.mic.start();
      setTimeout(this.micHandler,100);
      //else if button text is 'Stop'
    } else if (this.state.text === 'Stop') {
      //set button text to 'Scream Again'
      this.setState({text: 'Scream Again'});
      //display highest volume
      this.setState({displayScore: true})
      this.state.mic.stop();
    }
	}

	render() {
		return (
			<Grid>
				<Row className="gif" >
		    	<Col md={3}>
		    	{this.state.displayScore ?
		      	<div>
							<Row>Score: {Math.floor(this.state.screamLevel * 1000)} </Row>  
							<Row><Button onClick={this.saveScream} > Save Scream? </Button> </Row> 
		      	</div> : <div> </div> } 
		    	</Col>
		    	<Col md={6}>	
		      {this.state.scream ? <img src="../models/cat.gif" alt="dancing cat" /> : <div></div>}
		   	  </Col>	
		  	</Row>
		  	<Row>
		    	<Col md={2} mdOffset={4}> 
		      	<ScreamButton func={this.toggleClick} state={this.state.text}/>
		    	</Col>
		  	</Row> 
		  	<Row>
		    	<Col md={8} mdOffset={2} id='ScreamMeter'> </Col>
		  	</Row>
		  </Grid>
		);
	}
}

export default Scream;
