import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import HighScores from './HighScores.jsx'

const style = {
  card: {
    backgroundColor: '#36bfc7',
    textAlign: 'center'
  },
  cardContent: {
    fontSize: '36px'
  },
  img: {
    width: '100%'
  }
}

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHighScore: 1,
    }
  }

  // changeScore() {
  //   this.setState({
  //     userHighScore: //something??
  //   });
  // }

  render() {
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
          <Card >
            <CardMedia>
              <img src='../models/carnival_image.jpg' style={style.img}/>
            </CardMedia>
          </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            {this.props.user ?
              <Card style={style.card}>
                <Grid container spacing={24}>
                  <Grid item xs>
                    <CardHeader title="Your HIGHEST Score!"/>
                    <CardContent>{this.props.user.personalBest}</CardContent>
                  </Grid>
                  <Grid item xs>
                    <CardHeader title="Your HIGHEST Score!"/>
                    <CardContent>{this.props.currentScore}</CardContent>
                  </Grid>
                </Grid>
              </Card>
              :
              <Card style={style.card}>
                <CardHeader title="Your Current Score!"/>
                <CardContent style={style.cardContent}>{this.props.currentScore}</CardContent>
              </Card>
            }
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card style={style.card}>
              <CardHeader title="Other Peoples High Score!"/>
              <CardContent>
                {this.props.highScores.map((highScore, i) => (
                <HighScores key={i} highScore={highScore}/>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  };
};

export default Scores;
