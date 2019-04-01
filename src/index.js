import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import configureStore, { browserHistory } from './store/configureStore';
import './styles/index.css';

const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>   
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter> 
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
