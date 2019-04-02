import { join } from 'ramda';

export default ({page, tags}) => ({
  page,
  tags: join(',', [...tags, 'safe']),
  per_page: 20,
  extras: 'tags,description,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o',
  method: 'flickr.photos.search',
  tag_mode: 'all',
  api_key: '1831ee27f4a2b88c90158a3a4f3f1f29',
  format: 'json',
  callback: 'jsonFlickrApi',
});