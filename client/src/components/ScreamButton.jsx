import React from 'react';
import Button from 'material-ui/Button'

var ScreamButton = (props) => (
	<div className='screambutton'>
		<Button raised id='screambutton' type="button" onClick={props.func}> START </Button>
	</div>
);

export default ScreamButton;
