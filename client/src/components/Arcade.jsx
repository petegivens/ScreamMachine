import React from 'react';
import HighStriker from './HighStriker.jsx';
import LevelEnd from './LevelEnd.jsx'
import Scores from './Scores.jsx';
import axios from 'axios';
import Grid from 'material-ui/Grid';

class Arcade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openLevelEnd: false,
      payload: {},
      highScores: [],
      currentScore: 1
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
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Scores user={this.props.user} currentScore={this.state.currentScore} highScores={this.state.highScores} />
          </Grid>
          <Grid item xs={12} sm={8}>
              <HighStriker setOpenLevelEnd={this.setOpenLevelEnd}/>
          </Grid>
        </Grid>
        <LevelEnd open={this.state.openLevelEnd} payload={this.state.payload} />
      </div>
    );
  }
}

export default Arcade;
