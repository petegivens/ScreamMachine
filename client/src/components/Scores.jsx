import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import HighScores from './HighScores.jsx';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import { withStyles, withTheme } from 'material-ui/styles';


const styles = {
  card: {
    textAlign: 'center',
  },
  cardContent: {
    fontSize: '36px'
  },
  chip: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '2px',
    textAlign: 'center'
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
    const { theme } = props;
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
          <Card style={styles.carnival} >
            <CardContent>
                CARNIVAL SCREAM MACHINE
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            {this.props.user ?
              <Card style={styles.card}>
                <Grid container spacing={24}>
                  <Grid item xs>
                    <CardHeader title="Your Current Score!"/>
                    <Chip style={styles.chip} label={this.props.currentScore} />
                  </Grid>
                  <Grid item xs>
                    <CardHeader title="Your Highest Score!"/>
                    <Chip style={styles.chip} label={this.props.user.personalBest} />
                  </Grid>
                </Grid>
              </Card>
              :
              <Card style={styles.card}>
                <CardHeader title="Your Current Score!"/>
                <CardContent style={styles.cardContent}>{this.props.currentScore}</CardContent>
              </Card>
            }
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card style={styles.card}>
              <CardHeader title="HIGH SCORES"/>
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
