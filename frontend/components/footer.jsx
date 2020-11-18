import React from 'react';
import { FooterLinks } from './socials';

export const Footer = () => {
  
  let socials = []
  for (let key in FooterLinks){
    const item = FooterLinks[key];
    const li = (
      <li key={item.id} className="social-item">
        <a href={item.link}>
          <i className={item.icon}></i>
        </a>
      </li>
    )
    socials.push(li);
  }

  return (
    <div id="footer" className="footer">
      <div className="footer-third">
        <address>
          Contact: &nbsp; <a href="mailto:nateychau@gmail.com">nateychau@gmail.com</a> 
        </address>
      </div>
      <div className="footer-third">
        <div id='copyright'>© Nathan Chau 2020</div>
        <div>Made with &#10084;</div>
      </div>
      <div className="footer-third right">
        <ul className="socials-list">
          {socials}
        </ul>
      </div>
    </div>
  )
}