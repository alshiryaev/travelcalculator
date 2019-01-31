import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App';
import './styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer  from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from './history';
import { routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';

function configureStore() {
    const store = createStore(
        rootReducer(history),
        {},
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    )

    return store
}

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
