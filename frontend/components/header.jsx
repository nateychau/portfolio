import React from "react";
import { NavLink } from "react-router-dom";

const scrollTo = (hash) => {
  if (!hash) window.scrollTo({top: 0, behavior: 'smooth'});
  let section = document.getElementById(hash);
  const yOffset = -80;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink activeClassName="active-link" to="/" onClick={() => scrollTo()}>Nathan Chau</NavLink>
      </div>
      <div className="header-right">
        <ul className="nav-links">
          <li onClick={() => scrollTo('projects')}>Projects</li>
          <li onClick={() => scrollTo('about')}>About</li>
          <li onClick={() => scrollTo('footer')}>Contact</li>
          {/* <li><NavLink activeClassName="active-link" to="/">About</NavLink></li>
          <li><NavLink activeClassName="active-link" to="/">Projects</NavLink></li>
          <li><NavLink activeClassName="active-link" to="/">Contact</NavLink></li> */}
        </ul>
      </div>
    </div>
  )
}