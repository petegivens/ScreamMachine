import React from 'react';

var OurButton = (props) => (
	<div>	
		<button type="button" onClick={props.func}>{props.state}</button>
	</div>
)

export default OurButton;
