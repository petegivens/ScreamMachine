import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { withTheme } from 'material-ui/styles';
import { yellow } from 'material-ui/colors';

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
        textAlign: 'center'
      },
      chip: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: 'auto',
        textAlign: 'center',
      },
      title: {
        color: theme.palette.primary[500],
        lineHeight: '38px'
      },
      carnival: {
        fontFamily: 'circusregular',
        fontSize: '44px',
        textAlign: 'center',
        backgroundColor: yellow[500],
        // margin: 20
      }
    }

    return (
      <div>
        {this.props.user ?
          <Card style={styles.card}>
            <div style={styles.carnival} >
              <CardContent>
                <span style={styles.title}>CARNIVAL SCREAM MACHINE</span>
              </CardContent>
            </div>
            <Grid container spacing={24}>
              <Grid item sm>
                <CardHeader title="CURRENT LEVEL"/>
                <Chip style={styles.chip} label={this.props.currentScore} />
              </Grid>
              <Grid item sm>
                <CardHeader title="HIGHEST LEVEL"/>
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
