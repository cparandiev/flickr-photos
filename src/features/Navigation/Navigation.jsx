import React from 'react';
import {Navbar, NavbarBrand, Nav, Collapse, NavbarToggler } from 'reactstrap';

import NavItem from './components/NavItem';

class Navigation extends React.Component {
  state = { open: false };

  toggle = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render() {
    const {routesConfig} = this.props;
    
    return (
      <Navbar color="white" light expand="md" className="fixed-top">
        <NavbarBrand href={routesConfig.home.path}>
          Flickr Photos
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem path={routesConfig.home.path} name="Home" />
            <NavItem path={routesConfig.photos.path} name="Photos" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;