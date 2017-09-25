import React from 'react';

var Button = (props) => (
	<div>	
		<button type="button" onClick={props.func}>{props.state}</button>
	</div>
)

export default Button;
