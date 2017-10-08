import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { withTheme } from 'material-ui/styles';
import { yellow } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

class CurrentScore extends React.Component {

  render() {

    const { theme } = this.props;
    const primary = theme.palette.primary[500];

    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: 'center'
      },
      logoImage: {
        maxWidth: '100%'
      },
      marginTop20: {
        marginTop: 20
      },
      marginAuto: {
        margin: 'auto'
      }
    }

    const personalBest = this.props.user ? 
      <Card raised={true} style={styles.card}>
        <Grid container justify={"space-between"}>
          <Grid item>
            <CardContent>
              <Typography type='button'>YOUR BEST SCORE</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent>
              <Chip label={this.props.user.personalBest} />
            </CardContent>
          </Grid>
        </Grid>
      </Card> : null;

  return <div>
      <Hidden smDown>
        <Card>
          <img style={styles.logoImage} src="../../models/logo.png" />
        </Card>
      </Hidden>

      <Card raised={true} style={Object.assign({}, styles.card, styles.marginTop20)}>

        <Grid container justify={"space-between"}>
          <Grid item>
            <CardHeader title="CURRENT LEVEL" style={{ margin: 'auto' }}/>
          </Grid>
          <Grid item>
            <CardContent>
              <Chip label={this.props.currentScore} style={{ margin: 'auto' }}/>
            </CardContent>
          </Grid>
        </Grid>

      </Card>

      {personalBest}
    </div>;
  };
};


export default withTheme()(CurrentScore)
