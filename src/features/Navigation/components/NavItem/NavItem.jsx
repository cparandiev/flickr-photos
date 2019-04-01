import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavItem as RNavItem, NavLink } from 'reactstrap';

class NavItem extends Component {
  render() {
    const {path, name} = this.props;

    return (
      <RNavItem>
        <NavLink tag={Link} to={path}>{name}</NavLink>
      </RNavItem>
    );
  }
}

export default NavItem;