import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Card, {CardContent, CardHeader} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List';
import { withTheme } from 'material-ui/styles';
import HighScore from './HighScore.jsx'
import { yellow } from 'material-ui/colors';


class HighScores extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { theme } = this.props;
    const primary = theme.palette.primary[500];
    const accent = theme.palette.secondary[200];
    const yello = yellow[500];
    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: 'center',
        height: 625
      },
      yellowBackground: {
        backgroundColor: yello,
      },
      blueBackground: {
        backgroundColor: accent
      }
    }

    return (
      <div>
        <Card style={styles.card}>
          <Paper style={styles.yellowBackground} >
            <CardHeader title="LEADER BOARD"/>
          </Paper>
          <CardContent>
            <Paper style={styles.blueBackground}>
              {this.props.highScores.map((highScore, i) => (
                <HighScore key={i} highScore={highScore}/>
              ))}
            </Paper>
          </CardContent>
        </Card>
      </div>
    )
  };
};

export default withTheme()(HighScores)
