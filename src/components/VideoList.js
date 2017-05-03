import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

  renderVideoItems(){
    const {videos, onVideoSelect} = this.props

    return videos.map(video => (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video} />
    ))
  }
  render(){
    return(
      <ul className="col-md-4 list-group">
        {this.renderVideoItems()}
      </ul>
    );
  }
}

export default VideoList;
