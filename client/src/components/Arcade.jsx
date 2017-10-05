import React from 'react';
import HighStriker from './HighStriker.jsx';
import LevelEnd from './LevelEnd.jsx'
import SideBar from './SideBar.jsx';
import axios from 'axios';

class Arcade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openLevelEnd: false,
      payload: {},
      highScores: []
    }

    this.setOpenLevelEnd = this.setOpenLevelEnd.bind(this);
  }

  componentWillMount() {
    axios.get('/getHighScores')
    .then( ({ data }) => {
      this.setState({ highScores: data } )
    })
  }

  setOpenLevelEnd(value, payload) {
    this.setState({
      openLevelEnd: value,
      payload: payload
    })
  }

  render() {
    return (
      <div>
        <div>
          <HighStriker setOpenLevelEnd={this.setOpenLevelEnd}/>
          <SideBar />
        </div>
        <br />
        <div>
          <LevelEnd open={this.state.openLevelEnd} payload={this.state.payload} />
        </div>
      </div>
    );
  }
}

export default Arcade;
