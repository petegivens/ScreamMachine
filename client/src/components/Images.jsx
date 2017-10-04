import React from 'react';
import {Col} from 'react-bootstrap';
import Grid from 'material-ui/Grid'

const Images = (props) => (
	<Grid item xs={13} container={true} justify={'center'}> 
		{props.scream ? <img className='pics' src="../models/cat.gif" alt="dancing cat" /> :
    <img className='pics' src="../models/morgan.jpg"/>}
  </Grid>
)

export default Images;
