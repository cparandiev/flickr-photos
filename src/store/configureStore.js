import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from '../reducers';

export const browserHistory = createBrowserHistory();

export default (history) => {
  const middlewares = applyMiddleware(
    routerMiddleware(history),
  );

  const rootReducer = reducers(history);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewares)
  );

  return store;
};