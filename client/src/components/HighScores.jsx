import React from 'react';


const HighScores = (props) => (
  <div>
    <p>{props.highScore.username}: {props.highScore.score}</p>
  </div>
);

export default HighScores;
