import React, {Component} from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.log(sketch);
    this.state = {
      graph: sketch 
    }
  }
  render() {
    return (
    <div>tch={this.state.graph} /> 
      <div className p5>
	<script language="javascript" type="text/javascript" src="p5.min.js"></script>
	<script language="javascript" type="text/javascript" src="addons/p5.dom.js"></script> 
	<script language="javascript" type="text/javascript" src="p5.sound.min.js"></script> 
	<script language="javascript" type="text/javascript" src="sketch.js"></script>
      </div>
    </div>
  )}
}

export default App;
