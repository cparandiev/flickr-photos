import axios from 'axios';
import { mergeLeft, prop } from 'ramda';
import parseJsonp from 'parse-jsonp';

import {extractResponseStatusCode} from './utils';

export default (initialConfig) => {
  const defaultQueryParams = {
    api_key: initialConfig.apiKey,
    callback: initialConfig.callback,
    format: initialConfig.format,
  }

  return {
    execute: async ({method, url, queryParams, data}) => {

      const config = {
        method,
          url: `${initialConfig.baseUrl}/${url}`,
        // url: 'https://api.flickr.com/services/rest/?page=1&tags=safe&per_page=20&extras=tags%2Cdescription%2Curl_o%2Curl_c&method=flickr.photos.search&tag_mode=all&api_key=1831ee27f4a2b88c90158a3a4f3f1f29&format=json&callback=jsonFlickrApi',
        data,
        params: mergeLeft(queryParams, defaultQueryParams)
      };

      const response = await axios(config);
      
      return extractResponseStatusCode(response) === 200
          ? Promise.resolve(parseJsonp('jsonFlickrApi', prop('data', response)))
          : Promise.reject(response);
    }
  }
};
