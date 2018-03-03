import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
