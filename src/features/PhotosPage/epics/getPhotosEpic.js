import { mergeMap, debounceTime, tap } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';

import { apiRequestActions } from '../../../reduxActions';
import { GET_PHOTOS } from '../reduxActionTypes';
import { getPhotosActions } from '../reduxActions';
import parseJsonp from'parse-jsonp';

const getPhotosEpic$ = (action$, state$) => action$.pipe(
  ofType(GET_PHOTOS.DEFAULT),
  debounceTime(500),
  mergeMap(({payload, meta}) =>
      merge( 
          of(getPhotosActions.PENDING()),
          of(apiRequestActions.DEFAULT(
              {
                  method: 'GET',
                  url: 'services/rest',
                  ...getPhotosActions,
              },
              meta
          ))
      )
  )
);

const getPhotosEpicFulfilled$ = (action$, state$) => action$.pipe(
  ofType(GET_PHOTOS.FULFILLED),
  tap(a => console.log(a.payload.data)),
  tap(a => console.log(parseJsonp('jsonFlickrApi', a.payload.data))),
  mergeMap(() =>
    merge( 
      of(getPhotosActions.REJECTED),
    )
  )
);

export default combineEpics(getPhotosEpic$, getPhotosEpicFulfilled$);
