import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Switch from 'material-ui/Switch';

import Login from './Login.jsx';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    ({ showLegacy, page })
  }
  render() {
    return (
      <div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title">Scream Machine</Typography>
            <Button onClick={showLegacy}>
              Toggle Legacy App
            </Button>
            <Switch
              checked
              onChange={showLegacy}
              aria-label="checkedA"
            />

            <Login style={{float: 'right'}}/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar);
