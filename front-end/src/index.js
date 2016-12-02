import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import signup from './reducers/signup'

const composeEnhancers = composeWithDevTools({});
export const store = createStore(signup, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
