import React from 'react';
import {connect} from 'react-redux';
import VideoListEntry from './VideoListEntry.jsx';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  videoListEntries() {
  return (this.props.videos.videos).map((video) =>
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={this.props.handleVideoListEntryTitleClick}
      />
  );
}

render() {
    return (
      <div className="video-list media">
        {this.videoListEntries()}
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
)(VideoList);
