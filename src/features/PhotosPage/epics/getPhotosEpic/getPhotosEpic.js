import { mergeMap, debounceTime, map, catchError } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';

import { apiRequestActions } from '../../../../reduxActions';
import { GET_NEXT_PHOTOS } from '../../reduxActionTypes';
import { getNextPhotosActions, storePhotosActions } from '../../reduxActions';
import { generatePhotosQueryParams, transformPhotosResponse } from './utils';
import { paginationInfoSelector, photoFiltersSelector } from '../../selectors';
import { mergeSelectors } from '../../../../utils';

const getPhotosEpic$ = (action$, state$) => action$.pipe(
  ofType(GET_NEXT_PHOTOS.DEFAULT),
  debounceTime(500),
  mergeMap(({payload, meta}) => {
    const {paginationInfo, filters} = mergeSelectors([paginationInfoSelector, photoFiltersSelector])(state$.value);
    
    return merge( 
      of(getNextPhotosActions.PENDING()),
      of(apiRequestActions.DEFAULT({
          method: 'GET',
          url: 'services/rest',
          queryParams: generatePhotosQueryParams({page: paginationInfo.page + 1, tags: filters.tags }),
          ...getNextPhotosActions,
        },
        meta
      ))
    )
  })
);

const getPhotosEpicFulfilled$ = (action$, state$) => action$.pipe(
  ofType(GET_NEXT_PHOTOS.FULFILLED),
  map(({payload}) => transformPhotosResponse(payload)),
  map(storePhotosActions.DEFAULT),
  catchError(getNextPhotosActions.REJECTED)
);

export default combineEpics(getPhotosEpic$, getPhotosEpicFulfilled$);
