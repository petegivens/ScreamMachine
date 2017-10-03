import React from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const Login = (props) => (
  <div className="static-modal">
    <Dialog show={props.showLogin} onRequestClose={props.closeModal}>
      <DialogTitle>
        Login
      </DialogTitle>
      <DialogContent>
        <form onSubmit={props.login}>
          <TextField
            id="username"
          /><br />
          <TextField
            type="password"
            id="password"
          /><br />
        </form>
      </DialogContent>
      <DialogActions>
      <Button onClick={props.closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={props.login} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

export default Login;
