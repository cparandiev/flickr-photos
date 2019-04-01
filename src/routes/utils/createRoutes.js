import React from 'react';
import { Route } from 'react-router-dom';
import { map, pipe, values } from 'ramda';

export default pipe(
    values,
    map((props) => <Route key={props.path} {...props}/>)
);