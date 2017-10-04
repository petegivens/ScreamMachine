import React from 'react';

class Recorder extends React.Component {

  constructor() {
    super();

    this.state = {
      volume: 0
    }

    this.soundAllowed = (stream) => {
      this.stream = stream;

      //Audio stops listening in FF without // window.persistAudioStream = stream;
      //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
      //https://support.mozilla.org/en-US/questions/984179
      window.persistAudioStream = stream;
      this.audioContent = new AudioContext();
      var audioStream = this.audioContent.createMediaStreamSource(stream);
      var analyser = this.audioContent.createAnalyser();
      audioStream.connect(analyser);
      analyser.fftSize = 1024;

      var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

      //Through the frequencyArray has a length longer than 255, there seems to be no
      //significant data after this point. Not worth visualizing.
      var total = 0;
      var getVolume = () => {
        analyser.getByteFrequencyData(frequencyArray);
        var total = 0;
        for (var i = 0; i < 255; i++) {
          total += frequencyArray[i];
        }
        this.setState({volume: total});
        this.props.onVolume(total);
      }

      this.interval = setInterval(getVolume, 10);
    }

    this.soundNotAllowed = function(error) {
      console.error("You must allow your microphone.");
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || null;

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'start') {
      navigator.getUserMedia({
        audio: true
      }, this.soundAllowed, this.soundNotAllowed);
    } else if (nextProps.status === 'stop') {
      this.stream.getAudioTracks().forEach(function(track) {
        track.stop();
      });
      clearInterval(this.interval);
      this.audioContent.close();
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.render(this.state.volume)} */}
      </div>
    )
  }
}

export default Recorder;
