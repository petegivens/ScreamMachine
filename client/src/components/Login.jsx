import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

const styles = {
  textField: {
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    display: "block"
  }
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.login = props.login;
    this.logout = props.logout;

  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  render() {
    const { classes, user, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div className="loginButton">
          <Button raised color='accent' onClick={this.handleOpen}>Login</Button>
          <Dialog open={this.state.open} onRequestClose={this.handleClose}>
            <DialogTitle>{'Login'}</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                   label="Enter username"
                   placeholder="username"
                   className={classes.textField}
                   margin="normal"
                   onChange={this.handleChange('username')}
                 />
                <TextField
                  label="Enter password"
                  placeholder="password"
                  className={classes.textField}
                  margin="normal"
                  type="password"
                  onChange={this.handleChange('password')}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button onClick={
                () => {
                  this.login({ username: this.state.username, password: this.state.password });
                  this.handleClose();
                }
              }>Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    } else {
      return (
        <Button onClick={this.logout}>Logout, {user.username}</Button>
      )
    }
  }
}

export default withStyles(styles)(Login);
