import { combineEpics } from 'redux-observable';

import apiRequestEpic from './apiRequestEpic';

export default combineEpics(
  apiRequestEpic
);