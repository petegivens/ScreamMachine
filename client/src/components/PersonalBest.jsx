import React from "react";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Chip from "material-ui/Chip";
import { withTheme } from "material-ui/styles";

class personalBest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { theme } = this.props;
    const primary = theme.palette.primary[500];

    const styles = {
      card: {
        backgroundColor: primary,
        textAlign: "center",
        marginTop: 40
      }
    };

    return (
      <Card raised={true} style={styles.card}>
        <Grid container justify={"space-between"}>
          <Grid item>
            <CardHeader title="YOUR BEST" style={{ margin: "auto" }} />
          </Grid>
          <Grid item>
            <CardContent>
              <Chip label={this.props.personalBest} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withTheme()(personalBest);
