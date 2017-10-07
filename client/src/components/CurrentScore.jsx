import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Title from './Title.jsx';
import { withTheme } from 'material-ui/styles';




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
        backgroundColor: accent,
        textAlign: 'center',
      },
      cardContent: {
        fontSize: '36px'
      },
      chip: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '2px',
        textAlign: 'center',
        margin: 'auto'
      },
      carnival: {
        fontFamily: 'circusregular',
        fontSize: '44px',
        textAlign: 'center',
        backgroundColor: accent
      }
    }


    return (
      <div>
        {this.props.user ?
          <Card style={styles.card}>
            <Grid container spacing={24}>
              <Grid item xs>
              <CardHeader title="Current Level"/>
                <Chip style={styles.chip} label={this.props.currentScore} />
            </Grid>
            <Grid item xs>
            <CardHeader title="Highest Level"/>
              <Chip style={styles.chip} label={this.props.user.personalBest} />
              </Grid>
            </Grid>
          </Card>
          :
          <Card style={styles.card}>
            <CardHeader title="Your Current Score!"/>
            <Chip style={styles.chip} label={this.props.currentScore} />
          </Card>
        }
      </div>
    )
  };
};


export default withTheme()(CurrentScore)
