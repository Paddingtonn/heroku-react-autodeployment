import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "../sass/app.css";

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('app'));
});