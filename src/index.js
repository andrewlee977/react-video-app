import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
// const = ES6 syntax

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// `<App />` creates an instance of class App
ReactDOM.render(<App />, document.querySelector('.container'));
