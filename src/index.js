import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDYUyLJ0-tpsFRXsHXq6hi3LO0TH18ofak';

// Create a new component. This component should produce some HTML
// const = ES6 syntax
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos: videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }

// Take this component's generated HTML and put it on the page (in the DOM)
// `<App />` creates an instance of class App
ReactDOM.render(<App />, document.querySelector('.container'));
 
