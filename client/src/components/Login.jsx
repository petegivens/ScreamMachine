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

const styles = theme => ({
  textField: {
    margin: "auto",
    width: 200
  }
});


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
    const { classes } = this.props;
    return (
      <div className="loginButton">
        <Button onClick={this.handleOpen}>Login</Button>
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
  }
}

export default withStyles(styles)(Login);
