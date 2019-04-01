import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import apiService from '../services/apiService';

import { API_REQUEST } from '../reduxActionTypes';

const apiRequestEpic$ = action$ => action$.pipe(
  ofType(API_REQUEST.DEFAULT),
  tap(console.log),
  mergeMap(({payload, meta}) => from(apiService.execute(payload))
    .pipe(
      map((response) =>
        payload.FULFILLED(response, meta)
      ),
      catchError(error =>
        of(payload.REJECTED(error, meta))
      )
    )
  )
);

export default apiRequestEpic$;