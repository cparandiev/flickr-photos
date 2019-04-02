import { combineEpics } from 'redux-observable';

import apiRequestEpic from './apiRequestEpic';
import { getPhotosEpic } from '../features/PhotosPage/epics';

export default combineEpics(
  apiRequestEpic,
  getPhotosEpic
);