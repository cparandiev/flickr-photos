import { mergeMap, debounceTime, map, catchError, distinctUntilChanged } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { inc } from 'ramda';

import { apiRequestActions } from '../../../../reduxActions';
import { getNextPhotosActions, normalizePhotosActions, setPhotoSearchActions } from '../../reduxActions';
import { GET_NEXT_PHOTOS, NORMALIZE_PHOTOS, SET_PHOTOS_SEARCH } from '../../reduxActionTypes';
import { paginationInfoSelector, photoFiltersSelector } from '../../selectors';
import { generatePhotosQueryParams, transformPhotosResponse } from './utils';
import { mergeSelectors } from '../../../../utils';

export const getNextPhotosEpic$ = (action$, state$) => action$.pipe(
  ofType(GET_NEXT_PHOTOS.DEFAULT),
  debounceTime(300),
  mergeMap(() => {
    const {paginationInfo, filters} = mergeSelectors([paginationInfoSelector, photoFiltersSelector])(state$.value);
    const page = inc(paginationInfo.lastFetchedPage);
    const tags = filters.tags;

    return merge( 
      of(getNextPhotosActions.PENDING()),
      of(apiRequestActions.DEFAULT({
          method: 'GET',
          url: 'services/rest',
          queryParams: generatePhotosQueryParams({page, tags}),
          ...getNextPhotosActions,
        }
      ))
    );
  }),
  catchError((e) => of(getNextPhotosActions.REJECTED(e)))
);

export const getNextPhotosEpicFulfilled$ = (action$) => action$.pipe(
  ofType(GET_NEXT_PHOTOS.FULFILLED),
  map(({payload}) => normalizePhotosActions.DEFAULT(payload)),
  catchError((e) => of(normalizePhotosActions.REJECTED(e)))
);

const normalizePhotosActions$ = (action$) => action$.pipe(
  ofType(NORMALIZE_PHOTOS.DEFAULT),
  mergeMap(({payload}) => merge(
      of(normalizePhotosActions.PENDING()),
      of(payload).pipe(
        map(transformPhotosResponse),
        map(normalizePhotosActions.FULFILLED),
      )),
  ),
  catchError((e) => of(normalizePhotosActions.REJECTED(e)))
);

const setPhotosSearchEpic$ = (action$) => action$.pipe(
  ofType(SET_PHOTOS_SEARCH.DEFAULT),
  distinctUntilChanged((x, y) => x.payload === y.payload),
  mergeMap(({payload}) => merge(
    of(setPhotoSearchActions.PENDING()),
    of(setPhotoSearchActions.FULFILLED(payload)),
  )),
  catchError((e) => of(setPhotoSearchActions.REJECTED(e)))
);

export default combineEpics(
  getNextPhotosEpic$,
  getNextPhotosEpicFulfilled$,
  normalizePhotosActions$,
  setPhotosSearchEpic$,
);
