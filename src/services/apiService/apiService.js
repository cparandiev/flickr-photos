import axios from 'axios';
import qs from 'qs';

export default (initialConfig) => ({
  execute: ({method, url, headers, token, data}) => {
    // const queryString = qs.stringify({
    //   ...data,
    //   api_key: initialConfig.apiKey,
    //   format: 'json',
    // });

    const config = {
      method,
      // url: `${initialConfig.baseUrl}/${url}?${queryString}`,
      url: 'https://api.flickr.com/services/rest/?page=1&tags=safe&per_page=20&extras=tags%2Cdescription%2Curl_o%2Curl_c&method=flickr.photos.search&tag_mode=all&api_key=1831ee27f4a2b88c90158a3a4f3f1f29&format=json&callback=jsonFlickrApi',
      // data,
    };

    return axios(config);
  }
});
