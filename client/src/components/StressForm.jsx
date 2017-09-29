import React, {Component} from 'react';
import {Checkbox, Button, FormGroup, Radio, inline} from 'react-bootstrap';

var people = ['close family', 'extended family', 'friends', 'co-workers', 'ex-SO'];

class StressForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stressLevel: 0, 
			checkedPeople: [null,null,null,null,null]
		}
		this.change = this.change.bind(this);
		this.submit = this.submit.bind(this);
		this.stressLevel = this.stressLevel.bind(this);
	}

	submit(e) {
		e.preventDefault();
		console.log(this.state.checkedPeople);
		console.log(this.state.stressLevel);
	}

	change(e) {
		var arr = this.state.checkedPeople.slice();
		if (arr[e.target.value] === null) {
			arr[e.target.value] = people[e.target.value];
		} else {
			arr[e.target.value] = null; 
		}
		this.setState({checkedPeople: arr});
	}
	
	stressLevel(e) {
		this.setState({stressLevel: parseInt(e.target.value)});
	}

	render(props) {
		var checkboxes = people.map( (el,i) => {
			return <Checkbox onChange={this.change} value={i} key={i}>{el} </Checkbox>	
		})
		return (
			<form onSubmit={this.submit}>
				<div> Who did you hangout with today? </div>
				{checkboxes}
				<div> How stressed were you today? </div>
				<FormGroup onChange={this.stressLevel}> 
					<Radio name='stressLevel' value='0' inline> 0 </Radio> 
					<Radio name='stressLevel' value='1' inline> 1 </Radio> 
					<Radio name='stressLevel' value='2' inline> 2 </Radio>
					<Radio name='stressLevel' value='3' inline> 3 </Radio>
					<Radio name='stressLevel' value='4' inline> 4 </Radio>
					<Radio name='stressLevel' value='5' inline> 5 </Radio>
					<Radio name='stressLevel' value='6' inline> 6 </Radio>
					<Radio name='stressLevel' value='7' inline> 7 </Radio>
					<Radio name='stressLevel' value='8' inline> 8 </Radio>
					<Radio name='stressLevel' value='9' inline> 9 </Radio>
					<Radio name='stressLevel' value='10' inline> 10 </Radio>
				</FormGroup>
				<Button type='submit'> Submit </Button>
			</form>
		)}
}

export default StressForm;
