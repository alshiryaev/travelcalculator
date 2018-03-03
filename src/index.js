import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/normalize.css';
import './components/css/index.css';
import './components/css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <App />
        </div>
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
