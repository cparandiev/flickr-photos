
import { ActionsObservable } from 'redux-observable';

import { setPhotosSearchEpic$ } from '../getPhotosEpic';
import { setPhotoSearchActions } from '../../../reduxActions';
import { SET_PHOTOS_SEARCH } from '../../../reduxActionTypes';

const payload = 'dog cat animal';
const action$ = ActionsObservable.of(setPhotoSearchActions.DEFAULT(payload));

describe('Set Photos Search Epic', () => {
    it('dispatches the correct actions when it is successful', (done) => {
        const expectedOutputActions = [{
          type: SET_PHOTOS_SEARCH.PENDING
        },{
          type: SET_PHOTOS_SEARCH.FULFILLED,
          payload
        }];

        setPhotosSearchEpic$(action$)
          .subscribe(actualOutputAction => {
            expect(expectedOutputActions).toContainEqual(actualOutputAction);
            done();
          }
        );
    });

});