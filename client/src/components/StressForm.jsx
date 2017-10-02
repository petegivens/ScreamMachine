import React, {Component} from 'react';
import {Checkbox, Button, FormGroup, Radio, inline} from 'react-bootstrap';
import axios from 'axios';

class StressForm extends React.Component {
	constructor(props) {
		super(props);
		var selectedOptions = {};
		for(var key in formOptions) { 
			selectedOptions[key] = formOptions[key].map( (el) => {
				return null; 
			})	
		}
		this.state = {
			stressLevel: 0,
			selectedOptions: selectedOptions
		}

		this.addChecked = this.addChecked.bind(this);
		this.submit = this.submit.bind(this);
		this.stressLevel = this.stressLevel.bind(this);
	}

	submit(e) {
		e.preventDefault();
		var isFirst = false; 
		// make request to get data from database
		// if no data create empty one
		var stressors = JSON.stringify(this.state.selectedOptions);
		axios.post('/addForm', { 
			params: {
				username: this.props.user,
				stress_level: this.state.stressLevel,
				stressors: stressors
			}
		}).then( (error) => {
			axios.get('/getAverage')
				.then( (result) => {
					// if first form data
					if (result.data.length === 0) {
						isFirst = true;
						// we don't have an avgStess the first time, so we set it to current
						var avgStress = this.state.stressLevel;
						// make a object with 0's in every element of the array since there is no old data
						var oldData = {};
						for(var key in this.state.selectedOptions) { 
								oldData[key] = this.state.selectedOptions[key].map( (el) => {
								return 0; 
							})	
						}
					} else {
						var avgStress = result.data.stress_level;
						var oldData = JSON.parse(result.data.form_data);
					}
					// takes selected options and adds them to the average for the user (using stessLevel)
					var newAvg = {};
					for (var key in oldData) {
						newAvg[key] = [];
						oldData[key].forEach( (el,i) =>{
							if(this.state.selectedOptions[key][i] !== null) {
								var num;
								if (el === null) {
								//for first case
									num = this.state.stressLevel;
								} else {
								// get average
									num = (el + this.state.stressLevel)/2; 
								}
							} else {
								num = el;
							} 
							newAvg[key].push(num);
						})
					}
					var newStress = (this.state.stressLevel + avgStress)/2;
					axios.post('/addAverages', {
						params: {
							username: this.props.user,
							stress_level: newStress,
							form_data: JSON.stringify(newAvg),
							isFirst: isFirst
						}
					})
						.then( () =>{
							this.props.func();
						})
				})				
		})
	}

	addChecked(e) {
		var newState = {};
		var selectedEl = e.target.value;
		for(var key in formOptions) {
			newState[key] = this.state.selectedOptions[key].slice();
			var index = formOptions[key].indexOf(selectedEl);
			if (index !== -1) {
				if (newState[key][index] === null) {
					newState[key][index] = formOptions[key][index];
				} else {
					newState[key][index] = null;
				}
			} 
		}
		this.setState({selectedOptions: newState});
	}

	stressLevel(e) {
		this.setState({stressLevel: parseInt(e.target.value)});
	}

	render(props) {
		
		// need to do this for all catagories because you need to added text to display for the user 
		var peopleCheckbox = formOptions.people.map( (el,i) => {
			return <Checkbox onChange={this.addChecked} value={el} key={i}>{el} </Checkbox>	
		})
		var placeCheckbox = formOptions.places.map( (el, i) => {
			return <Checkbox onChange={this.addChecked} value={el} key={i}>{el} </Checkbox>
		})

		return (
			<form onSubmit={this.submit}>
				<div> Who did you hangout with today? </div>
				{peopleCheckbox}
				<div> Where where you today? </div>
				{placeCheckbox}
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

window.formOptions = {
	people: ['close family', 'extended family', 'friends', 'co-workers', 'ex-SO'],
	places: ['work', 'school', 'gym', 'outside for more than an hour','bar']
}

export default StressForm;
