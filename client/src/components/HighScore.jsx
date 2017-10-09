import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import List, {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction
} from "material-ui/List";
import axios from 'axios';
import Divider from 'material-ui/Divider';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


class HighScores extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  componentWillMount() {
    this.randomPicGenerator()
  };

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleRequestClose() {
    this.setState({ open: false });
  };

  randomPicGenerator() {
    var url = '';
    let arr = [ 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/41YOKaUtyYL.jpg',
                'https://peopledotcom.files.wordpress.com/2016/08/steven-tyler-435-18.jpg?w=435',
                'https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg',
                'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?',
                'http://i0.kym-cdn.com/entries/icons/original/000/018/526/hulk-hogan.jpg',
                'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/images/2014/TRANSFORMATIONS/2004-amy-poehler-567_0.jpg?itok=d2XZKuKK',
                'https://cdn.pastemagazine.com/www/articles/HeideckerFoxygenLead.png',
                'https://vignette3.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728',
                'https://vignette.wikia.nocookie.net/rickandmorty/images/e/e8/Evilmort.png/revision/latest/scale-to-width-down/250?cb=20170911062908'
              ]

    url = arr[Math.floor(Math.random() * 9 )]
    this.setState({userPic : url })
  }

  render() {
    const { highScore } = this.props;
    return (
      <div>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Whoa, what a great score!
          </DialogTitle>
          <ListItem>
            <ListItemAvatar>
              <Avatar size={60} src={this.state.userPic} />
            </ListItemAvatar>
            <ListItemText primary={`${highScore.first_name} reached level ${highScore.score} on (date)`} />
          </ListItem>
        </Dialog>

        <ListItem button onClick={this.handleClickOpen}>
          <ListItemAvatar>
            <Avatar size={30} src={this.state.userPic} />
          </ListItemAvatar>
          <ListItemText primary={`${this.props.highScore.first_name}`} />
          <ListItemSecondaryAction>
            <ListItemText primary={this.props.highScore.score} />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
    )
  };
};

export default HighScores;
