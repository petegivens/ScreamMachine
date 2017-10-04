import React from 'react';
import Button from 'material-ui/Button'


//need to restyle button to be larger
var ScreamButton = (props) => (
	<div className='screambutton'>
		<Button raised id='screambutton' type="button" onClick={props.func} style={{width: 200, height: 80}}> {props.state} </Button>
	</div>
);

export default ScreamButton;
