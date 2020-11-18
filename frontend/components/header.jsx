import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink activeClassName="active-link" to="/">Nathan Chau</NavLink>
      </div>
      <div className="header-right">
        <ul className="nav-links">
          <li><NavLink activeClassName="active-link" to="/">About</NavLink></li>
          <li><NavLink activeClassName="active-link" to="/">Projects</NavLink></li>
          <li><NavLink activeClassName="active-link" to="/">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}