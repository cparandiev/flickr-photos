import { SET_PHOTOS_SEARCH } from '../reduxActionTypes';

const initialState = {
  pagesInfo: {
    page: 0, 
    pages: 1,
  },
  photos: [],
  perPage: 20,
  filters: {
    tags: ['safe'],
  }
};

export default (state = initialState, {type, payload})=> {
  switch(type){
    case SET_PHOTOS_SEARCH.DEFAULT:
      return initialState;
    default: 
      return state;
  }
};