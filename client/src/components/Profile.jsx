import React, {Componenet} from 'react';
import {LineChart} from 'react-d3-basic';

class Profile extends React.Component  {

  getScreams() {


  }

  render() {

    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    var	chartSeries = [
      {	 
	field: 'volume',
	name: 'Volume',
	color: '#ff7f0e'
      }
    ]
    // your x accessor
    var x = function(d) {
      return d.index;
    }

    return (
      <div> 
	<LineChart showXGrid={false} showYGrid={false} title={'Scream Volumes'} data={screams} width={700} height={300} chartSeries={chartSeries} x={x} />
      </div> );
  }
}

export default Profile








