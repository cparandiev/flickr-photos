
import { ActionsObservable } from 'redux-observable';

import { getNextPhotosEpicFulfilled$ } from '../getPhotosEpic';
import { getNextPhotosActions } from '../../../reduxActions';
import { NORMALIZE_PHOTOS } from '../../../reduxActionTypes';

const action$ = ActionsObservable.of(getNextPhotosActions.FULFILLED());

describe('Get Next Photos Epic Fulfilled', () => {
    it('dispatches the correct action when it is successful', (done) => {
        const expectedOutputAction = {type: NORMALIZE_PHOTOS.DEFAULT};

        getNextPhotosEpicFulfilled$(action$)
            .subscribe(actualOutputAction => {
                expect(actualOutputAction).toEqual(expectedOutputAction);
                done();
            }
        );
    });
});