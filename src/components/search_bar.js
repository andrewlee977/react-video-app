// import React, and pull off property Component
import React, { Component } from 'react';

// extends React.Component => gives access to all the functionality that React.Component has
// React.Component turns JS into HTML
class SearchBar extends Component {
    constructor(props) {
        super(props);

        //initialize state
        this.state = { term: '' };
    }

    // every class needs render function that returns JSX
    render = () => {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
