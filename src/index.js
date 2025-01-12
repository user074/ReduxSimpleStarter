import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDnGXJLY2XjgwW4Q-4uqGXCO0zS80yjXkQ';



class App extends Component {
	constructor(props){
		super(props);

		this.state={
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term:term}, (videos)=> {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({videos});
		})
	}

	render(){
		return (
			<div>
				<SearchBar onSearchTermChange={term=> this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
