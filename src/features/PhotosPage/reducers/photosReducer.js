import { concat, split } from 'ramda';
import { SET_PHOTOS_SEARCH, NORMALIZE_PHOTOS } from '../reduxActionTypes';

export const initialState = {
  paginationInfo: {
    photosPerPage: 20,
    lastFetchedPage: 0,
    totalPages: 1,
  },
  filters: {
    tags: []
  },
  data: []
};

export default (state = initialState, {type, payload})=> {
  switch(type){
    case SET_PHOTOS_SEARCH.FULFILLED:
      return {
        ...initialState,
        filters: {
          tags: split(' ', payload)
        }
      };
      
    case NORMALIZE_PHOTOS.FULFILLED:
      return {
        ...state,
        paginationInfo: {
          photosPerPage: payload.perpage,
          lastFetchedPage: payload.page,
          totalPages: payload.pages,
        },
        data: concat(state.data, payload.photo)
      };
    
    case NORMALIZE_PHOTOS.REJECTED:
      return {
        ...initialState,
        filters: state.filters
      };

    default: 
      return state;
  }
};