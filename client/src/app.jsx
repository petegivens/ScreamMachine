import React, {Component} from 'react';
import graph, {getMic} from '../models/micGraph';
import Button from './components/Button.jsx'; 

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      scream: false,
      text: 'Start',
      mic: null
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.micHandler = this.micHandler.bind(this);
    setInterval(this.micHandler, 250); 
  }

  micHandler() {
    this.setState({mic:getMic()});
    var micLevel = this.state.mic.getLevel(); 
    //console.log(micLevel); // for debugging 
    if (this.state.scream) {
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
      this.state.mic.start(); 
      //else if button text is 'Stop'
    } else if (this.state.text === 'Stop') {
      //set button text to 'Scream Again'
      this.setState({text: 'Scream Again'});
      this.state.mic.stop(); 
    }
  }

  render() {
    return (
      <div>
	      <div> supBitches </div>
	      <div className="gif"> 
	        {this.state.scream ? <img src="../models/cat.gif" alt="dancing cat" /> : <div> Scream </div>}
	      </div>
	      <Button func={this.toggleClick} state={this.state.text}/>
	      <div id='ScreamMeter'> </div>
      </div> 
    );
  }
}

export default App;

