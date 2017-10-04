import React from 'react';
import Recorder from './Recorder.js';

class HighStriker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'stop',
      volume: 0
    }
  }

  startRecording() {
    this.setState({
      status: 'start'
    });
  }

  stopRecording() {
    this.setState({
      status: 'stop'
    });
  }

  onVolume(volume) {
    console.log('V', volume);
    this.setState({
      volume
    })
  }

  render() {
    return (
      <div>
        {
          <Recorder status={this.state.status} onVolume={this.onVolume.bind(this)} />
        }
        {this.state.volume}
        <input type="range" min="0" max="100" value={this.state.volume} />
        <button onClick={this.startRecording.bind(this)}>Start</button>
        <button onClick={this.stopRecording.bind(this)}>Stop</button>
      </div>
    )
  }
}

export default HighStriker;
