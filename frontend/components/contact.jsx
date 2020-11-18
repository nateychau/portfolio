import React from "react";
import { FooterLinks, SocialLinks } from './socials';

export const Contact = () => {

  const ContactLinks = Object.assign({}, FooterLinks, SocialLinks);
  let socials = [];
  for (let key in ContactLinks){
    const item = ContactLinks[key];
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
    <div id="contact">
      <h2>Contact</h2>
      <div>
        Got a question? Or just wanna chat? Feel free to shoot me an email,
        or connect with me on any of the platforms below. 
      </div>
      <ul className="socials-list">
        {socials}
      </ul>
    </div>
  )
}