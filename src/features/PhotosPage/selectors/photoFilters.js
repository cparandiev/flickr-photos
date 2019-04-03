import { createSelector } from 'reselect';
import { path, __, assoc } from 'ramda';

export default createSelector(
    path(['photos', 'filters']),
    assoc('filters', __, Object.create(null))
);