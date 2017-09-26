import React from 'react';

var ourButton = (props) => (
	<div>	
		<button type="button" onClick={props.func}>{props.state}</button>
	</div>
)

export default ourButton;
