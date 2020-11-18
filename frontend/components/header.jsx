import React from "react";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        Nathan Chau
      </div>
      <div className="header-right">
        <ul className="nav-links">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}