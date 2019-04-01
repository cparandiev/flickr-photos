import { concat } from 'ramda';
import { SET_PHOTOS_SEARCH, STORE_PHOTOS } from '../reduxActionTypes';

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
    case STORE_PHOTOS.DEFAULT:
      return {
        ...initialState,
        paginationInfo: {
          photosPerPage: payload.perpage,
          lastFetchedPage: payload.page,
          totalPages: payload.total,
        },
        data: concat(state.data, payload.photo)
      };
    default: 
      return state;
  }
};