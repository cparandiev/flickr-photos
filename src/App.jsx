import React, { Component } from 'react';

import Navigation from './features/Navigation';
import LoadingBar from './features/LoadingBar';
import Layout from './features/Layout';
import Routes, { routesConfig } from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoadingBar/>
        <Navigation routesConfig={routesConfig}/>
        <Layout>
          <Routes />    
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
