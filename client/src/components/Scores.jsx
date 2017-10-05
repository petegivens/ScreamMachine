import React from 'react';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import HighScores from './HighScores.jsx'
import { withStyles, withTheme } from 'material-ui/styles';

const styles = {
  card: {
    textAlign: 'center',
  },
  cardContent: {
    fontSize: '36px'
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
          <Grid item xs={12}>
            {this.props.user ?
              <Card style={styles.card}>
                <CardHeader title="Your HIGHEST Score!"/>
                <CardContent>{this.props.user.personalBest}</CardContent>
              </Card>
              :
              <Card style={styles.card}>
                <CardHeader title="Your HIGHEST Score!"/>
                <CardContent style={styles.cardContent}>1</CardContent>
              </Card>
            }
          </Grid>
          <Grid item xs={12}>
            <Card style={styles.card}>
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
