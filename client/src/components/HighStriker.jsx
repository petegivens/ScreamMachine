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

  getVolume(){
    console.log('VOLUME', this.refs.recorder.volume, 'RECORDING', this.refs.recorder.recording);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {
          <Recorder ref="recorder" sensitivity={5} status={this.state.status} getVolume={this.getVolume.bind(this)} render={(volume) => {
            return (
              <div>
                {volume}
                <input type="range" min="0" max="100" value={volume} />
              </div>
            )
          }} />
        }
        {this.state.volume}
        <button onClick={this.startRecording.bind(this)}>Start</button>
        <button onClick={this.stopRecording.bind(this)}>Stop</button>
        <button onClick={this.getVolume.bind(this)}>Stop</button>
      </div>
    )
  }
}

export default HighStriker;
