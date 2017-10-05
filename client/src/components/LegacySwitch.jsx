import React from 'react';
import Switch from 'material-ui/Switch';
import PropTypes from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import green from 'material-ui/colors/green';

const styles = createStyleSheet("LegacySwitch", {
  bar: {},
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  }
})

export default class LegacySwitch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLegacy: false
    }
    const showLegacy = props.showLegacy
    console.log(showLegacy)
  }

  render() {
    return (
      <FormControlLabel
        control={
          <Switch
            classes={{
              checked: classes.checked
            }}
            checked={this.state.showLegacy}
            onChange={ () => {
              this.props.showLegacy();
              this.setState({ showLegacy: !this.state.showLegacy });
              }
            }
          />
        }
        label="LEGACY APP"
      />
    )
  }
}
