import React from 'react';
import {Col} from 'react-bootstrap';

const Images = (props) => (
	<Col md={4} mdOffset={4}> 
		{props.scream ? <img className='pics' src="../models/cat.gif" alt="dancing cat" /> : 
    <img className='pics' src="../models/morgan.jpg"/>}
  </Col>
)
 
export default Images;