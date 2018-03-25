import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/normalize.css';
import './components/css/index.css';
import './components/css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();
