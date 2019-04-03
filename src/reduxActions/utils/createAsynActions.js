import { createAction } from 'redux-actions';
import { mapObjIndexed } from 'ramda';

export default mapObjIndexed((actionType) => createAction(actionType));