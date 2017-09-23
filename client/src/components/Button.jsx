import React from 'react';

class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'Start'
		};
		this.toggleClick = this.toggleClick.bind(this);
	}

	toggleClick(e) {
		e.preventDefault();
		//if button text is 'Start' or 'Scream Again'
		if (this.state.text === 'Start' || this.state.text === 'Scream Again') {
			//set button text to 'Stop'
			this.setState({text: 'Stop'});
		//else if button text is 'Stop'
		} else if (this.state.text === 'Stop') {
			//set button text to 'Scream Again'
			this.setState({text: 'Scream Again'});
		}
	}

	render() {
		return (
			<button type="button" onClick={this.toggleClick}>{this.state.text}</button>
		);
	}
}

export default Button;