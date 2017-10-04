import React from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton
} = ShareButtons;

<<<<<<< HEAD
  constructor() {
    state = {
=======
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');


export default class LevelEnd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
>>>>>>> rebase
      open: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleNextLevel = this.handleNextLevel.bind(this)
  };

<<<<<<< HEAD
  handleRequestClose = () => {
    this.setState({ open: false });
  };


  render () {
    <div>
      <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
        <DialogTitle>{"You've Passed Level ***Insert Level***"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have You Screamed Enough?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
              I'm Finished
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Next Level
            </Button>
        </DialogActions>
      </Dialog>
    </div>
=======
  handleOpen() {
    this.setState({
      open: true
    })
    console.log(window.location)
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  handleNextLevel() {
    //change the state of HighStriker to go up to the next level
  }
>>>>>>> rebase

  handleStartOver() {
    //change the state of HighStriker to go back to the first level
  }

  render () {
    return (
      const url = "https://www.youtube.com/watch?v=J---aiyznGQ";
      const quote = 'I Got to Level **insert level**. Think You Can Beat Me?'

      <div>
        <Button raised onClick={this.handleOpen}>LevelEnd</Button>
          <Dialog open={this.state.open} onRequestClose={this.handleClose}>
            <DialogTitle>{"You've Passed Level ***Insert Level***"}</DialogTitle>
            <DialogContent>
              <div>
                <FacebookShareButton
                  url={url}
                  quote={quote}>
                <FacebookIcon
                  size={32}
                  square />
                </FacebookShareButton>
              </div>
              <DialogContentText>
                Have You Screamed Enough?
              </DialogContentText>

            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                  I'm Finished
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Next Level
                </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
  }
}
