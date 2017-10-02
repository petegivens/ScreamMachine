import React from 'react';

var ScreamButton = (props) => (
	<div className='screambutton'>	
		<button id='screambutton' type="button" onClick={props.func}>{props.state}</button>
	</div>
);

export default ScreamButton;
