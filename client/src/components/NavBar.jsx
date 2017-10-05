import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LegacySwitch from './LegacySwitch.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { withTheme } from 'material-ui/styles';
import white from 'material-ui/colors';

const NavBar = ({ showLegacy, login, logout, user, isLoggedIn, signup }) => (
  <AppBar position="absolute" >
    <Toolbar>
      <Typography type="title" style={{ flex: 1 }}>SCREAM MACHINE</Typography>
      <LegacySwitch showLegacy={showLegacy}/>
      <Login
        user={user}
        login={login}
        logout={logout}
        isLoggedIn={isLoggedIn}
        className="login"
      />
      <Signup signup={signup} isLoggedIn={isLoggedIn}/>
    </Toolbar>
  </AppBar>
)

export default NavBar;
