import axios from 'axios';
import { mergeLeft, prop } from 'ramda';
import parseJsonp from 'parse-jsonp';

import {extractResponseStatusCode} from './utils';

export default (initialConfig) => {
  const defaultQueryParams = {
    api_key: initialConfig.apiKey,
    callback: initialConfig.callback,
    format: initialConfig.format,
  };

  return {
    execute: async ({method, url, queryParams, data}) => {

      const config = {
        method,
        url: `${initialConfig.baseUrl}/${url}`,
        data,
        params: mergeLeft(queryParams, defaultQueryParams)
      };

      const response = await axios(config);
      
      return extractResponseStatusCode(response) === 200
          ? Promise.resolve(parseJsonp('jsonFlickrApi', prop('data', response)))
          : Promise.reject(response);
    }
  };
};
