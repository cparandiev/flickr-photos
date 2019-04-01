import { createAction } from 'redux-actions';
import { mapObjIndexed, nthArg } from 'ramda';

// eslint-disable-next-line no-magic-numbers
const metaCreator = nthArg(1); // skip the payload, because we are interested only for the metadata itself

export default mapObjIndexed((actionType) => createAction(actionType, null, metaCreator));