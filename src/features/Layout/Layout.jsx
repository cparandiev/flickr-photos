import React, { Component } from 'react';

export class Layout extends Component {
  render() {
    const { children } = this.props;
    
    return (
      <div className="main-layout">
        <div className="container">
            {children}
        </div>
      </div>
    );
  }
}

export default Layout;    