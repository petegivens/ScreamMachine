import React from 'react';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { withTheme } from 'material-ui/styles';
import { yellow } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import List, {ListItem} from 'material-ui/List';

class CurrentScore extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    const { theme } = this.props;
    const primary = theme.palette.primary[500];
    const accent = theme.palette.secondary[200];
    const accentDarker = theme.palette.secondary[600];


    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: 'center'
      },
      logoImage: {
        maxWidth: '100%'
      },
      marginTop: {
        marginTop: 20,
        color: primary
      }
    }

    const personalBest = this.props.user ? (
      <Card raised={true} style={styles.card}>
        <CardHeader title="HIGHEST LEVEL"/>
        <CardContent>
          <Chip label={this.props.user.personalBest} />
        </CardContent>
      </Card>
    ) : null;
    

  return (
      <div>
        <Card>
          <img style={styles.logoImage} src="../../models/logo.png" />
        </Card>
        <Card raised={true} style={Object.assign({}, styles.card, styles.marginTop)}>
          <CardHeader title="CURRENT LEVEL"/>
          <CardContent >
            <Chip label={this.props.currentScore} />
          </CardContent>
        </Card>
        { personalBest }
      </div>
    )
  };
};


export default withTheme()(CurrentScore)
