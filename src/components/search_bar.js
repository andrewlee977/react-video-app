// import React, and pull off property Component
import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

// extends React.Component => gives access to all the functionality that React.Component has
class SearchBar extends Component {
    constructor(props) {
        super(props);

        //initialize state
        this.state = { term: '' };
    }

    // every class needs render function that returns JSX
    render = () => {
        // JS variables should always be in brackets
        // (1) return <input onChange={this.onInputChange} />;
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={(event) => this.setState({ term: event.target.value })} />
            </div>
        );
    }

    // (1)
    // onInputChange = (event) => {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;