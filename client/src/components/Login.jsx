import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <div className="loginButton">
        <Button onClick={this.handleOpen}>Login</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleClose}>
        <DialogTitle>{'Subscribe'}</DialogTitle>
          <DialogContent>
            <TextField autoFocus id="username" label="username" />
            <TextField autoFocus id="password" label="password" type="password" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Login;
