import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 100,
  },
  typography: {
    textAlign: 'center'
  }
};

var Resources = () => {
  return (
      <Card style={styles.card}>
        <CardContent>
        <CardMedia
          style={styles.media}
          image="../models/relax.jpg"
        />
          <Typography type="headline" component="h2" style={styles.typography}>
            Chill Out
          </Typography>
          <Typography type="body2" style={styles.typography}>
            Here Are Some Resources To Stay Calm
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" href="https://youtu.be/Jyy0ra2WcQQ">
            Guided Relaxation
          </Button>
          <Button dense color="primary" href="https://asoftmurmur.com/">
            Calming Sounds
          </Button>
        </CardActions>
      </Card>
  );
}

export default withStyles(styles)(Resources);
