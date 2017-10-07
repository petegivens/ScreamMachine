import React from 'react';
import { withTheme } from 'material-ui/styles';
import Card, {CardHeader, CardContent, CardMedia} from 'material-ui/Card';


var Title = ({theme}) => {
  const accent = theme.palette.secondary[200];
  const styles = {
    title: {
      color: theme.palette.primary[500],
      lineHeight: '38px'
    },
    carnival: {
      fontFamily: 'circusregular',
      fontSize: '44px',
      textAlign: 'center',
      backgroundColor: accent
    }
  }

  return(
    <Card style={styles.carnival} >
      <CardContent>
        <span style={styles.title}>CARNIVAL SCREAM MACHINE</span>
      </CardContent>
    </Card>
  )
};

export default withTheme()(Title)
