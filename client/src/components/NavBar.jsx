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
import NavProfile from './NavProfile.jsx';

const NavBar = ({ showLegacy, login, logout, user, isLoggedIn, signup, page, navHandler}) => {
    const background = page === 'Arcade' ? 'primary' : 'default';
    return (
      <AppBar position="absolute" color={background}>
        <Toolbar>
          {(page === 'scream' || page === 'Profile' || page === 'StressForm') &&
            <NavProfile navHandler={navHandler}/>
          }
          <div style={{ flex: 1 }}>
            <LegacySwitch showLegacy={showLegacy} page={page}/>
          </div>
          <Signup signup={signup} isLoggedIn={isLoggedIn}/>
          <Login
          user={user}
          login={login}
          logout={logout}
          isLoggedIn={isLoggedIn}
          className="login"
          />
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;
