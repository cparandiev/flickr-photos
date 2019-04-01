import { pipe, props, map, filter, find, converge, assoc, identity, isNil, complement, where, prop } from 'ramda';
import { transformNested } from '../../../../../utils';

const notNill = complement(isNil);

const getUrl = pipe(props(['url_o', 'url_l', 'url_c']), find(notNill));

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
)
