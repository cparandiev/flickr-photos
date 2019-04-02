import { mergeMap, catchError } from 'rxjs/operators';
import { from, of, merge } from 'rxjs';
import { ofType } from 'redux-observable';
import apiService from '../services/apiService';

import { API_REQUEST } from '../reduxActionTypes';
import { apiRequestActions } from '../reduxActions';

const apiRequestEpic$ = action$ => action$.pipe(
  ofType(API_REQUEST.DEFAULT),
  mergeMap(({payload, meta}) => merge(
    of(apiRequestActions.PENDING()),
    from(apiService.execute(payload)).pipe(
      mergeMap((response) => merge(
        of(apiRequestActions.FULFILLED(response, meta)),
        of(payload.FULFILLED(response, meta))
      )),
      catchError(error => merge(
        of(apiRequestActions.REJECTED(error, meta)),
        of(payload.REJECTED(error, meta))
      ))
    ))
  )
);

export default apiRequestEpic$;