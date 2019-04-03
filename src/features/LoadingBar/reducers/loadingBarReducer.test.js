import loadingBarReducer from './loadingBarReducer';
import { API_REQUEST } from '../../../reduxActionTypes/';

describe('Loading Bar Reducer', () => {
  it('should return the initial state', () => {
    expect(loadingBarReducer(undefined, {})).toEqual({ showIndex: 0 });
  });

  it('should handle API_REQUEST_PENDING', () => {
    const action = {type: API_REQUEST.PENDING};
    expect(loadingBarReducer(undefined, action)).toEqual({ showIndex: 1 });
  });

  it('should handle API_REQUEST_REJECTED', () => {
    const action = {type: API_REQUEST.REJECTED};
    expect(loadingBarReducer({ showIndex: 1}, action)).toEqual({ showIndex: 0 });
  });

  it('should handle API_REQUEST_FULFILLED', () => {
    const action = {type: API_REQUEST.FULFILLED};
    expect(loadingBarReducer({ showIndex: 1 }, action)).toEqual({ showIndex: 0 });
  });
});