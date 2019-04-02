import { inc, dec } from 'ramda';

import { API_REQUEST } from '../../../reduxActionTypes';

const initialState = { 
  showIndex: 0
};

export default (state = initialState, {type, payload})=> {
  switch(type){
    case API_REQUEST.PENDING:
      return {showIndex: inc(state.showIndex)};
    
    case API_REQUEST.REJECTED:
    case API_REQUEST.FULFILLED:
      return {showIndex: dec(state.showIndex)};
    
    default:
      return state;
  }
};