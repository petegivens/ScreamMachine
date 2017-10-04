import React from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const SideBar = () => (

    <div>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>Sup</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>Hey</CardContent>
        </Card>
      </Grid>
    </div>

);

export default SideBar;
