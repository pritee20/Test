import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from './components/dev/logger';
import ReduxPromise from 'redux-promise';



import allReducers from './components/reducers';



import App from './components/Layout/App';

import '../../../scss/app.scss';


const isProduction = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

if (isProduction) {
  // In production adding only thunk middleware
  const middleware = applyMiddleware(thunk);

  store = createStore(
    middleware,
    allReducers
  );
} else {
  // In development mode beside thunk
  // logger and DevTools are added
  const middleware = applyMiddleware(ReduxPromise,thunk, logger);
  let enhancer;

  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }

  store = createStore(
    allReducers, enhancer
  );

}


// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
    <App/>
    
  </Provider>,
  document.getElementById('root')
);



