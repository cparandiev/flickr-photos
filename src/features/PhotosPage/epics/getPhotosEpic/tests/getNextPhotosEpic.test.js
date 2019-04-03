
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';

import { initialState } from '../../../reducers/photosReducer';
import { getNextPhotosEpic$ } from '../getPhotosEpic';
import { getNextPhotosActions } from '../../../reduxActions';
import { GET_NEXT_PHOTOS } from '../../../reduxActionTypes';

const action$ = ActionsObservable.of(getNextPhotosActions.DEFAULT());
const state$ = new StateObservable(new Subject(), {photos: initialState});

describe('saveFieldEpic Epic', () => {
    it('dispatches the correct actions when it is successful', (done) => {
        const expectedOutputActions = [{
          type: GET_NEXT_PHOTOS.PENDING
        },{
          type: 'API_REQUEST',
          payload:{
            method: 'GET',
            url: 'services/rest',
            queryParams: {
              page: 1,
              tags: 'safe',
              per_page: 20,
              extras: 'tags,description,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o',
              method: 'flickr.photos.search',
              tag_mode: 'all',
              api_key: '1831ee27f4a2b88c90158a3a4f3f1f29',
              format: 'json',
              callback: 'jsonFlickrApi'
            },
            ...getNextPhotosActions
          }
        }];

        getNextPhotosEpic$(action$, state$)
            .subscribe(actualOutputActions => {
                expect(expectedOutputActions).toContainEqual(actualOutputActions);
                done();
            }
        );
    });

});