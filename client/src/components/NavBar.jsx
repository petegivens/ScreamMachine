import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const styles = {
  floatRight: {
    float: 'right'
  },
  spacerDiv: {
    flex: 1
  }
}
const NavBar = ({ login, logout, user, isLoggedIn, signup, page, navHandler}) => {
  const background = page === 'Arcade' ? 'primary' : 'accent';
  return (
    <AppBar position="absolute" color='primary'>
      <Toolbar>
        <div style={styles.spacerDiv}>
          <IconButton style={styles.menuIcon} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </div>
        <Signup signup={signup} isLoggedIn={isLoggedIn} page={page} />
        <Login user={user} login={login} logout={logout} isLoggedIn={isLoggedIn} className="login" page={page} />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
