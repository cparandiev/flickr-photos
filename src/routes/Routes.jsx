import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import {createRoutes} from './utils';
import routesConfig from './routesConfig';

class Routes extends Component {
  render() {
    return (
      <Switch>
        {createRoutes(routesConfig)}
      </Switch>
    );
  }
}

export default Routes;