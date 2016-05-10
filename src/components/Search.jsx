import React from 'react';
import {connect} from 'react-redux';
import {getVideos} from '../actions/index';
import YOUTUBE_API_KEY from '../config/youtube.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: e.target.value
    };
    this.props.getVideos(options)
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return {
      searchYoutube: state.searchYoutube
    };
  },
  {
    getVideos
  }
)(Search);
