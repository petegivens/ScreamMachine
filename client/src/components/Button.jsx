import React from 'react';

var ScreamButton = (props) => (
	<div>	
		<button id='screambutton' type="button" onClick={props.func}>{props.state}</button>
	</div>
)

export default ScreamButton;
