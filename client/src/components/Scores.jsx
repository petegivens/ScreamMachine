import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import HighScores from './HighScores.jsx';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import List from 'material-ui/List';

const style = {
  card: {
    backgroundColor: '#36bfc7',
    textAlign: 'center'
  },
  cardContent: {
    fontSize: '36px'
  },
  chip: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '2px',
    justify: 'center',
    margin: 'auto'
  },
  carnival: {
    boxShadow: 'none',
    fontFamily: 'circusregular',
    fontSize: '44px',
    textAlign: 'center'
  }
}

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHighScore: 1,
    }
  }


  render() {
    return(
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Card style={style.carnival} >
              <CardMedia image="../models/balloons.jpg" title="Balloons"/>
              <CardContent>
                  CARNIVAL SCREAM MACHINE
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            {this.props.user ?
              <Card style={style.card}>
                <Grid container spacing={24}>
                  <Grid item xs>
                    <CardHeader title="Your Current Score!"/>
                    <Chip style={style.chip} label={this.props.currentScore} />
                  </Grid>
                  <Grid item xs>
                    <CardHeader title="Your Highest Score!"/>
                    <Chip style={style.chip} label={this.props.user.personalBest} />
                  </Grid>
                </Grid>
              </Card>
              :
              <Card style={style.card}>
                <CardHeader title="Your Current Score!"/>
                <Chip style={style.chip} label={this.props.currentScore} />
              </Card>
            }
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card style={style.card}>
              <CardHeader title="HIGH SCORES"/>
              <CardContent>
                <List>
                  {this.props.highScores.map((highScore, i) => (
                  <HighScores key={i} highScore={highScore}/>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  };
};

export default Scores;
