import React, {Component} from 'react';
import graph, {getMic} from '../models/micGraph';

class App extends React.Component {
  constructor() {
    super();
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

// console.log('mic level', getMic())
