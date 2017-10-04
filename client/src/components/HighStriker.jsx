import React from 'react';
import Recorder from './Recorder.js';

const style = {
  striker: {
    position: 'relative',
    display: 'block',
    height: '76vh'
  },
  slider: {
    width: '70vh',
    transformOrigin: '35vh 35vh',
    transform: 'rotate(-90deg)',
    position: 'relative',
    top: 0,
    left: 0
  }
}

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
              <div style={style.striker}>
                {volume}
                <input style={style.slider} type="range" min="0" max="100" value={volume} />
              </div>
            )
          }} />
        }
        <button onClick={this.startRecording.bind(this)}>Start</button>
        <button onClick={this.stopRecording.bind(this)}>Stop</button>
        <button onClick={this.getVolume.bind(this)}>Stop</button>
      </div>
    )
  }
}

export default HighStriker;
