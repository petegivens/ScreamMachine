import React from "react";
import Card, { CardHeader, CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Chip from "material-ui/Chip";
import { withTheme } from "material-ui/styles";
import { yellow } from "material-ui/colors";
import Paper from "material-ui/Paper";
import List, { ListItem } from "material-ui/List";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import PersonalBest from "./PersonalBest.jsx";

class LeftColumn extends React.Component {
  render() {
    const { theme } = this.props;
    const primary = theme.palette.primary[500];

    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: "center",
        marginTop: 20
      },
      logoImage: {
        maxWidth: "100%"
      }
    };

    const logo = (
      <Hidden smDown >
        <Card raised={true}>
          <img style={styles.logoImage} src="../../models/logo.png" />
        </Card>
      </Hidden>
    );

    return (
      <div>
          { logo }
          <Card raised={true} style={styles.card}>
            <Grid container justify={"space-between"}>
              <Grid item>
                <CardHeader title="CURRENT LEVEL" />
              </Grid>
              <Grid item>
                <CardContent>
                  <Chip
                    label={this.props.currentScore}
                    style={{
                      margin: "auto"
                    }}
                  />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
          {this.props.user && (
            <PersonalBest personalBest={this.props.user.personalBest} />
          )}
      </div>
    );
  }
}

export default withTheme()(LeftColumn);
