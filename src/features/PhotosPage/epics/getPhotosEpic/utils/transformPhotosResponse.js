import { pipe, props, map, filter, find, converge, assoc, identity, isNil, complement, where, prop } from 'ramda';
import { transformNested } from '../../../../../utils';

const notNill = complement(isNil);

const getUrl = pipe(
  props(['url_sq', 'url_t', 'url_s', 'url_q', 'url_m', 'url_n', 'url_z', 'url_c', 'url_l', 'url_o']),
  find(notNill)
);

const setPhotoUrl = converge(assoc('imageUrl'), [getUrl, identity]);

export default pipe(
  transformNested(
    ['photos', 'photo'],
    pipe(
      map(setPhotoUrl),
      filter(where({imageUrl: notNill})),
    )
  ),
  prop('photos')
);
