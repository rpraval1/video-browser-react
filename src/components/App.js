import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyCFkk6qRIUmsGi2Gan7Y7f2_HnrpfbqB5Q'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('SteveJobs')
    // var baseUrl ='https://www.googleapis.com/youtube/v3/search?part=snippet&key='+API_KEY+'&q=SteveJobs'
    //q=leela&key=AIzaSyCFkk6qRIUmsGi2Gan7Y7f2_HnrpfbqB5Q&'

    // fetch(baseUrl)
    // .then(response => {
    //   return response.text()
    // })
    // .then(body => {
    //     console.log(body)
    //     this.setState({
    //       videos: body
    //     })
    //
    // })

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (resultVideos) => {
      this.setState({
        videos: resultVideos,
        selectedVideo: resultVideos[0]
      })
    })
  }
  //
  render() {
    const {videos, selectedVideo} = this.state
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos}/>
      </div>
    );
  }
}

export default App;
