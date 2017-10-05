import React from 'react';
import HighStriker from './HighStriker.jsx';
import LevelEnd from './LevelEnd.jsx'
import Scores from './Scores.jsx';


class Arcade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openLevelEnd: false,
      payload: {}
    }

    this.setOpenLevelEnd = this.setOpenLevelEnd.bind(this);
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
