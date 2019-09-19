import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
const articleData = require('./data.json');

ReactDOM.render(<App data={articleData} />, document.getElementById('root'));
