import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      windowTop: 0,
      current: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(){
    this.setState({windowTop: window.scrollY});
  }

  scrollTo(hash){
    return () => {
      if (!hash.length){
        window.scrollTo({top: 0, behavior: 'smooth'});
        // this.setState({windowTop: 0})
      } else {
        let section = document.getElementById(hash);
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        // this.setState({current: hash});
      }
    }
  }

  render(){
    return (
      <div className="header">
        <div className="header-left">
          <div
            className={this.state.windowTop === 0 ? "header-title top" : "header-title"} 
            onClick={this.scrollTo('')}
            >
              Nathan Chau
          </div>
        </div>
        <div className="header-right">
          <ul className="nav-links">
            <li
              // className={this.state.current === "projects" ? "active" : ''} 
              onClick={this.scrollTo('projects')}
            >Projects</li>
            <li
              // className={this.state.current === "about" ? "active" : ''} 
              onClick={this.scrollTo('about')}
            >About</li>
            <li
              // className={this.state.current === "footer" ? "active" : ''} 
              onClick={this.scrollTo('footer')}
            >Contact</li>
            {/* <li><NavLink activeClassName="active-link" to="/">About</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/">Projects</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/">Contact</NavLink></li> */}
          </ul>
        </div>
        <div id="header-border"></div>
      </div>
    )
  }
}