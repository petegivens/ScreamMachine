import React from 'react';
import HighStriker from './HighStriker.jsx';
import LevelEnd from './LevelEnd.jsx'
import SideBar from './SideBar.jsx';


class Arcade extends React.Component {

  render() {
    return (
      <div>
      <div>
        <HighStriker />
        <SideBar />
      </div>
      <br />
      <div>
        <LevelEnd />
      </div>
      </div>
    );
  }
}

export default Arcade;
