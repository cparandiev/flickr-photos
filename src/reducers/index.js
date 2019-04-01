import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import photos from '../features/PhotosPage/reducers';

export default (history) => combineReducers({
  router: connectRouter(history), 
  photos
});