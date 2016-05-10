import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import searchYouTube from '../lib/searchYouTube.js';
import Nav from './Nav.jsx';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: null
    };
  }

  componentWillMount() {
    this.state.currentVideo = this.props.videos.videos[0];
  }


  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return {
      videos: state.videos
    };
  }
)(App);
