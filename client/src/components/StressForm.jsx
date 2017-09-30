import React, {Component} from 'react';
import {Checkbox, Button, FormGroup, Radio, inline} from 'react-bootstrap';
import axios from 'axios';

var people = ['close family', 'extended family', 'friends', 'co-workers', 'ex-SO'];
var place = ['work', 'school', 'gym', 'outside for more than an hour','bar'];

class StressForm extends React.Component {
	constructor(props) {
		super(props);
		var checkPeople = [];
		var checkPlace = []; 

		people.forEach((el)=> {
			checkPeople.push(null);
		})
		place.forEach((el)=> {
			checkPlace.push(null);
		})	

		this.state = {
			stressLevel: 0, 
			checkedPeople: checkPeople,
			checkedPlace: checkPlace
		}

		this.changePeople = this.changePeople.bind(this);
		this.changePlace = this.changePlace.bind(this);
		this.submit = this.submit.bind(this);
		this.stressLevel = this.stressLevel.bind(this);
	}

	submit(e) {
		e.preventDefault();
		var obj = {
			people: this.state.checkedPeople,
			place: this.state.checkedPlace
		}
		// make request to get data from database
		// if no data create empty one
		var context = this;
		var stressors = JSON.stringify(obj);
		axios.post('/addForm', { 
			params: {
				username: context.props.user,
				stress_level: context.state.stressLevel,
				stressors: stressors
			}
		}).then( (error) => {
			axios.get('/getAverage')
				.then( (result) => {
					console.log('get average',result);
					if (result.data.length === 0) {
						console.log('first average');
						var avgStress = 0;
						 var oldData = {
							people: 0,
							place: 0
						 }
					} else {
						var avgStress = result.stress_level;
						var oldData = JSON.parse(result.form_data);
					}
					var peopleArr = oldData.people;
					var placeArr = oldData.place;
					var people = [];
					var place = [];
					// add current values and take average
					peopleArr.forEach( (el,i) => {
						if (this.state.checkedPeople[i] !== null) {
							var num;
							if (el === 0) {
								num = this.state.stressLevel; 
							} else  {
								num = (el + this.state.stressLevel)/2;
							}
						} else {
							num = el;
						}
						people.push(num);
					});
					placeArr.forEach( (el,i) => {
						if (this.state.checkedPlace[i] !== null) {
							var num;
							if (el === 0) {
								num = this.state.stressLevel; 
							} else  {
								num = (el + this.state.stressLevel)/2;
							}
						} else {
							num = el;
						}
						place.push(num);
					});
					var data = {
						people: people,
						place: place
					}
					var newStress = (this.stressLevel + avgStress)/2
					console.log('new average', JSON.stringify(data));	
					axios.post('/addAverages', {
						params: {
							username: props.usersname,
							stress_level: newStress,
							form_data: JSON.stringify(data) 
						}
					})
				})				
		})
	}

	changePeople(e) {
		var arr = this.state.checkedPeople.slice();
		if (arr[e.target.value] === null) {
			arr[e.target.value] = people[e.target.value];
		} else {
			arr[e.target.value] = null; 
		}
		this.setState({checkedPeople: arr});
	}

	changePlace(e) {
		var arr = this.state.checkedPlace.slice();
		if (arr[e.target.value] === null) {
			arr[e.target.value] = place[e.target.value];
		} else {
			arr[e.target.value] = null; 
		}
		this.setState({checkedPlace: arr});
	}

	stressLevel(e) {
		this.setState({stressLevel: parseInt(e.target.value)});
	}

	render(props) {
		var peopleCheckbox = people.map( (el,i) => {
			return <Checkbox onChange={this.changePeople} value={i} key={i}>{el} </Checkbox>	
		})
		var placeCheckbox = place.map( (el, i) => {
			return <Checkbox onChange={this.changePlace} value={i} key={i}>{el} </Checkbox>
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

export default StressForm;
