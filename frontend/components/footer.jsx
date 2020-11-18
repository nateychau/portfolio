import React from 'react';
import { SocialLinks } from './socials';

export const Footer = () => {
  
  let socials = []
  for (let key in SocialLinks){
    const item = SocialLinks[key];
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
    <div className="footer">
      <div className="footer-third">
        <address>
          Contact: &nbsp; <a href="mailto:nateychau@gmail.com">nateychau@gmail.com</a> 
        </address>
      </div>
      <div className="footer-third">
        © Nathan Chau 2020
      </div>
      <div className="footer-third right">
        <ul className="socials-list">
          {socials}
        </ul>
      </div>
    </div>
  )
}