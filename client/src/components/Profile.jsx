import React, {Componenet} from 'react';
import {LineChart} from 'react-d3-basic';
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';
import StressForm from './StressForm.jsx';
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screams: [],
    }
    this.getScreams = this.getScreams.bind(this);
    this.getScreams();
  }

  getScreams() {
    axios.get('/getScreams', {
      params: {
	user: this.props.user
      }
    })
    .then( (screams) => {
      this.setState({screams: screams.data});
    })
  }
  
  render() {
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    var chartSeries1 = [
      {	 
	field: 'volume',
	name: 'Volume',
	color: '#ff7f0e'
      }
    ];

    var	chartSeries2 = [
      {
	field: 'lowfreq',
	name: 'Low Frequency',
	color: '#cabb6e'
      },
      {
	field: 'midfreq',
	name: 'Low Frequency',
	color: '#123456'
      },
      {
	field: 'highfreq',
	name: 'High Frequency',
	color: '#654321' 
      }
    ]
    // your x accessor
    var x = function(d) {
      return d.id;
    }

    return (
      <Grid> 
	<Row> <h1> Hi {this.props.user} </h1> </Row>	
	<Row>
	  <Col md={8} mdOffset={2}>
	    <LineChart showXGrid={false} showYGrid={false} title={'Scream Volumes'} data={this.state.screams} width={700} height={300} chartSeries={chartSeries1} x={x} />
	  </Col>	
	</Row>
	<Row>
	  <Col md={8} mdOffset={2}>
	    <LineChart showXGrid={false} showYGrid={false} title={'Scream Frequency'} data={this.state.screams} width={700} height={300} chartSeries={chartSeries2} x={x} />
	  </Col>
	</Row>
	<Row>
	  <StressForm />
	</Row>
      </Grid> );
  }
}

export default Profile








