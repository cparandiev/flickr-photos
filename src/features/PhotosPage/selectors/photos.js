import { createSelector } from 'reselect';
import { path, __, assoc } from "ramda";

export default createSelector(
    path(['photos', 'data']),
    assoc('photos', __, Object.create(null))
)