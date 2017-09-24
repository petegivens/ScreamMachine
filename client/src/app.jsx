import React, {Component} from 'react';
import graph from '../models/micGraph';

class App extends React.Component {
  constructor() {
    super();
    console.log('mic level',graph.mic.getLevel())
  }

  render() {
    return (
    <div>
      <div id='ScreamMeter'>
      </div>
      <div> supBitches </div>
    </div>
  )}
}

export default App;
