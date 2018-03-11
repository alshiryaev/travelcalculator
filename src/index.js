import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/normalize.css';
import './components/css/index.css';
import './components/css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

ReactDOM.render((
    <BrowserRouter children={routes}>
            <App />
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
