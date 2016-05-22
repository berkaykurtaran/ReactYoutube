import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAScSb4b2eI5pBUmVLnJIgAAa4bkwvzWEU';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.search('surfboards');
    }

    search(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
            //console.log(videos);
        });
    }


    render() {

        const videoSearch=_.debounce((term)=> {this.search(term)},300);
        return (
            <div>
                <SearchBar onTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo=> this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementsByClassName('container')[0]);