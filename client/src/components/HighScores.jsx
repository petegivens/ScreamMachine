import React from 'react';
import Chip from 'material-ui/Chip';

const style = {
  chip: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '2px',
    textAlign: 'center'
  }
}
const HighScores = (props) => (
  <div>
    <Chip style={style.chip} label={`${props.highScore.username}: ${props.highScore.score}`} />
  </div>
);

export default HighScores;


// <Chip label="Basic Chip" className={classes.chip} />
