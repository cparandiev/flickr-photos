import {prop} from 'ramda';
import parseJsonp from 'parse-jsonp';

export default (response) => {
  const status = prop('status', response);

  if(status !== 200){
    return status;
  }

  try {
    const parsedRespones = parseJsonp('jsonFlickrApi', prop('data', response));

    switch(parsedRespones.stat){
      case 'ok':
        return 200;
      default:
        return 400;
    }
    
  } catch(error){
    return 500;
  }
};