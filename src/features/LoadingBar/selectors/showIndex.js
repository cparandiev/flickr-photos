import { createSelector } from 'reselect';
import { path, __, assoc } from 'ramda';

export default createSelector(
    path(['loadingBar', 'showIndex']),
    assoc('showIndex', __, Object.create(null))
);