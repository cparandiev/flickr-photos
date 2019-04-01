import React, { Component } from 'react';

import Navigation from './features/Navigation';
import Layout from './features/Layout';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Layout>
          <Routes />    
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
