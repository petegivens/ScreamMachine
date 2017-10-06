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

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      verifyPassword: ''
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.signup = props.signup;
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
    const { classes, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div className="signupButton">
          <Button raised color='accent' onClick={this.handleOpen}>Sign Up</Button>
          <Dialog open={this.state.open} onRequestClose={this.handleClose}>
            <DialogTitle>{'Sign Up'}</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                   label="First Name"
                   placeholder="First Name"
                   className={classes.textField}
                   margin="normal"
                   onChange={this.handleChange('firstname')}
                 />
                <TextField
                  label="Last Name"
                  placeholder="Last Name"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.handleChange('lastname')}
                />
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
                  this.signup(
                    {
                      firstname: this.state.firstname,
                      lastname: this.state.lastname,
                      username: this.state.username,
                      password: this.state.password
                    }
                  );
                  this.handleClose();
                }
              }>Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    } else {
      return null
    }
  }
}

export default withStyles(styles)(Signup);
