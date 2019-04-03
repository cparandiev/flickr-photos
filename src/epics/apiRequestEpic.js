import { mergeMap, catchError } from 'rxjs/operators';
import { from, of, merge } from 'rxjs';
import { ofType } from 'redux-observable';
import apiService from '../services/apiService';

import { API_REQUEST } from '../reduxActionTypes';
import { apiRequestActions } from '../reduxActions';

const apiRequestEpic$ = action$ => action$.pipe(
  ofType(API_REQUEST.DEFAULT),
  mergeMap(({payload}) => merge(
    of(apiRequestActions.PENDING()),
    from(apiService.execute(payload)).pipe(
      mergeMap((response) => merge(
        of(apiRequestActions.FULFILLED(response)),
        of(payload.FULFILLED(response))
      )),
      catchError(error => merge(
        of(apiRequestActions.REJECTED(error)),
        of(payload.REJECTED(error))
      ))
    ))
  )
);

export default apiRequestEpic$;