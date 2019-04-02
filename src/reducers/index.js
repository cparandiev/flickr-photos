import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import photos from '../features/PhotosPage/reducers';
import loadingBar from '../features/LoadingBar/reducers';

export default (history) => combineReducers({
  router: connectRouter(history), 
  photos,
  loadingBar
});