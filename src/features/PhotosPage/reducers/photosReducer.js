import { SET_PHOTOS_SEARCH } from '../reduxActionTypes';

const initialState = {};

export default (state = initialState, {type, payload})=> {
  switch(type){
    case SET_PHOTOS_SEARCH.DEFAULT:
      return initialState;
    default: 
      return state;
  }
};