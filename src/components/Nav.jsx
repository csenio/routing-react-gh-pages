import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/page2">page2</NavLink>
        <NavLink to="/page3">page3</NavLink>
      </nav>
    );
  }
}

export default Nav;
