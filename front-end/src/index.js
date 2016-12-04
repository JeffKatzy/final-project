import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
import './index.css';
import rootReducer from './reducers/rootReducer'

const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
