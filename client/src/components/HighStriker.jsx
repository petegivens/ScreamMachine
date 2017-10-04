import React from 'react';
import Recorder from './Recorder.js';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 21,
  elementCount: 124,
  decay: 0.95
};

const style = {
  striker: {
    position: 'relative',
    display: 'block',
    height: 550,
    backgroundColor: 'yellow',
    width: 100,
    margin: 'auto'
  },
  slider: {
    width: 400,
    transformOrigin: '200px 200px',
    transform: 'rotate(-90deg)',
    position: 'relative',
    top: 0,
    left: 35,
    backgroundColor: 'transparent'
  },
  bell: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
    borderRadius: 100,
    marginLeft: '-10px'
  }
}

class HighStriker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'stop',
      volume: 0,
      hit100: false
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
    this.setState({
      hit100: true
    });
    setTimeout(() => {
      this.setState({
        hit100: false
      });
    }, 100)
  }

  volumeListener(volume) {
    if (volume >= 100) {
      this.setState({
        hit100: true
      });
      setTimeout(() => {
        this.setState({
          hit100: false
        });
      }, 4000)
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="striker">
        {
          <Recorder ref="recorder" sensitivity={4} status={this.state.status} getVolume={this.getVolume.bind(this)} volumeListener={this.volumeListener.bind(this)} render={(volume) => {
            return (
              <div style={style.striker}>
                <div style={style.bell}>
                  <Confetti className="confetti" active={this.state.hit100} config={confettiConfig} />
                </div>
                <input style={style.slider} type="range" min="0" max="100" value={volume} />
                {volume}
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
