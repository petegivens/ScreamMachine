import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { withTheme } from 'material-ui/styles';
import { yellow } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class CurrentScore extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    const { theme } = this.props;
    const primary = theme.palette.primary[500];
    const accent = theme.palette.secondary[200];


    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: 'center',
        height: 625
      },
      chip: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: 'auto',
        textAlign: 'center'
      },
      title: {
        color: accent,
        lineHeight: '38px'
      },
      carnival: {
        fontFamily: 'circusregular',
        fontSize: '44px',
        textAlign: 'center',
        backgroundColor: yellow[500]
        // margin: 20
      },
      logo: {
        backgroundColor: 'transparent',
        height: 200
      },
      scores: {
        backgroundColor: primary,
        height: 425
      },
      paper: {
        backgroundColor:  yellow[500],
      }
    }

    return (
      <div>
        <Card style={styles.card} >
          <Card style={styles.logo}>
            <div style={styles.carnival} >
              <CardContent>
                <span style={styles.title}>CARNIVAL SCREAM MACHINE</span>
              </CardContent>
            </div>
          </Card>
          {this.props.user ?
            <Card style={styles.scores}>
              <Paper style={styles.paper}>
                <CardHeader title="CURRENT LEVEL"/>
                  <Chip style={styles.chip} label={this.props.currentScore} />
                <Divider />
                <CardHeader title="HIGHEST LEVEL"/>
                  <Chip style={styles.chip} label={this.props.user.personalBest} />
              </Paper>
            </Card>
            :
            <Card style={styles.scores}>
              <Paper style={styles.paper}>
                <CardHeader title="Your Current Score!"/>
                <Chip style={styles.chip} label={this.props.currentScore} />
              </Paper>
            </Card>
          }
        </Card>
      </div>
    )
  };
};


export default withTheme()(CurrentScore)
