import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List';
import axios from 'axios';
const style = {
  chip: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '2px',
    textAlign: 'center'
  }
}

class HighScores extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.randomPicGenerator = this.randomPicGenerator.bind(this)
  }

  componentWillMount() {
    let first = this.props.highScore.first_name;
    let last = this.props.highScore.last_name;
    axios.get('https://api.github.com/users/' + first + last)
    .then( (user) => {
      this.setState({ userPic: user.data.avatar_url } )
    })
    .catch( (err) => {
      this.randomPicGenerator()
    })
  }


  randomPicGenerator() {
    var url = '';
    let arr = [ 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg',
                'http://www.miami.com/wp-content/uploads/sites/2/2017/01/rock-eyebrow.jpg',
                'https://peopledotcom.files.wordpress.com/2016/08/steven-tyler-435-18.jpg?w=435',
                'https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg',
                'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?'
              ]

    url = arr[Math.floor(Math.random() * 4)]
    this.setState({userPic : url })
  }




  render() {
    return(

        <ListItem >
          <ListItemAvatar>
            <Avatar src={this.state.userPic} />
          </ListItemAvatar>
          <ListItemText primary={this.props.highScore.score} />
        </ListItem>
    );
  };
};

export default HighScores;
