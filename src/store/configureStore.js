import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';

import reducers from '../reducers';
import rootEpic from '../epics';

export const browserHistory = createBrowserHistory();

export default (history) => {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = applyMiddleware(
    routerMiddleware(history),
    epicMiddleware
  );

  const rootReducer = reducers(history);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewares)
  );

  epicMiddleware.run(rootEpic);

  return store;
};