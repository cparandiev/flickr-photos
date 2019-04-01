import { createSelector } from 'reselect';
import { path, __, assoc } from "ramda";

export default createSelector(
    path(['photos', 'paginationInfo']),
    assoc('paginationInfo', __, Object.create(null))
)