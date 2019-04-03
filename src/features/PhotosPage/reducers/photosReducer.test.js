import photosReducer, { initialState } from './photosReducer';
import { setPhotoSearchActions, normalizePhotosActions } from '../reduxActions/';

describe('Photos Reducer', () => {
  it('should return the initial state', () => {
    expect(photosReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_PHOTOS_SEARCH_FULFILLED', () => {
    const action = setPhotoSearchActions.FULFILLED('safe car bus');

    expect(photosReducer(undefined, action)).toEqual({
      ...initialState,
      filters: {
        tags: ['safe', 'car', 'bus']
      }
    });
  });

  it('should handle NORMALIZE_PHOTOS_FULFILLED', () => {
    const action = normalizePhotosActions.FULFILLED({
      perpage: 10,
      page: 1,
      pages: 3,
      photo: [{id: 1}]
    });

    expect(photosReducer(undefined, action)).toEqual({
      paginationInfo: {
        photosPerPage: 10,
        lastFetchedPage: 1,
        totalPages: 3,
      },
      filters: {
        tags: []
      },
      data: [{id:1}]
    });
  });
});