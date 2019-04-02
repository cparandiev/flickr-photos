import { concat } from 'ramda';
import { SET_PHOTOS_SEARCH, NORMALIZE_PHOTOS } from '../reduxActionTypes';

const initialState = {
  paginationInfo: {
    photosPerPage: 20,
    lastFetchedPage: 0,
    totalPages: 0,
  },
  filters: {
    tags: []
  },
  data: []
};

export default (state = initialState, {type, payload})=> {
  switch(type){
    case SET_PHOTOS_SEARCH.DEFAULT:
      return initialState;
      
    case NORMALIZE_PHOTOS.FULFILLED:
      return {
        ...state,
        paginationInfo: {
          photosPerPage: payload.perpage,
          lastFetchedPage: payload.page,
          totalPages: payload.total,
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