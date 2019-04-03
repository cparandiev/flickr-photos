
import { ActionsObservable } from 'redux-observable';

import { normalizePhotosEpic$ } from '../getPhotosEpic';
import { normalizePhotosActions } from '../../../reduxActions';
import { NORMALIZE_PHOTOS } from '../../../reduxActionTypes';

const payload = {
  photos: {
    page: 1,
    pages: 2,
    perpage: 20,
    total: '33',
    photo: [{
      id: '32705008118',
      owner: '24701538@N03',
      title: 'The stare',
      description: {
        _content: 'Leopard stare.  Kruger Park '
      },
      tags: 'kruger national park safari jeep 4x4',
      url_l: 'https://farm8.staticflickr.com/7906/32705008118_7a9c6ac9f3_b.jpg',
      height_l: '683',
      width_l: '1024'
    }]
  },
  stat: 'ok'
};

const action$ = ActionsObservable.of(normalizePhotosActions.DEFAULT(payload));

describe('Normalize Photos Epic', () => {
    it('dispatches the correct actions when it is successful', (done) => {
      const expectedOutputActions = [{
        type: NORMALIZE_PHOTOS.PENDING
      },{
        type: NORMALIZE_PHOTOS.FULFILLED,
        payload:{
          page: 1,
          pages: 2,
          perpage: 20,
          total: '33',
          photo:[{
            id: '32705008118',
            owner: '24701538@N03',
            title: 'The stare',
            description: {
              _content: 'Leopard stare.  Kruger Park '
            },
            tags: 'kruger national park safari jeep 4x4',
            url_l: 'https://farm8.staticflickr.com/7906/32705008118_7a9c6ac9f3_b.jpg',
            height_l: '683',
            width_l: '1024',
            imageUrl: 'https://farm8.staticflickr.com/7906/32705008118_7a9c6ac9f3_b.jpg'
          }]
        }
      }];
        
      normalizePhotosEpic$(action$)
          .subscribe(actualOutputAction => {
              expect(expectedOutputActions).toContainEqual(actualOutputAction);
              done();
          }
      );
    });
});