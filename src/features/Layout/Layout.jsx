import React, { Component } from 'react';

import './layout.css';

export class Layout extends Component {
  render() {
    const { children } = this.props;
    
    return (
      <div className="main-layout">
        {children}
      </div>
    );
  }
}

export default Layout;    