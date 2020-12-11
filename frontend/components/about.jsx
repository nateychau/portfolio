import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div>
        <div className="about-left">
          <h2>Nathan Chau</h2>
          <div>I'm a software engineer with a specialization in front-end development and design, and experience with JavaScript, React, Redux, Ruby on Rails, jQuery, HTML5, CSS3, MongoDB, postgreSQL, and Express. My passion for software lies in the design of intuitive, accessible, and aesthetically-pleasing user interfaces. 
            <br />
            <br />
            I'm currently working on Schopenahauer, a full stack MERN application, with a team of 3 other developers. Schopenhauer allows users to create and share music visualizers to pair with their favorite songs, and features a growing library of templates for creators to start with. Besides the MERN stack, Schopenahauer
            is built with Redux, Canvas API, and AWS S3. 
            <br />
            <br />
            Besides software, I'm passionate about rock climbing, traveling, and interior design. Check out some of the projects I've listed above to see how these interests intersect with software!
          </div>
          <div>
            <a target="_blank"href="https://drive.google.com/file/d/10IcJAFDZYPAOsJsrJNTFQx1nwx2s9P9W/view?usp=sharing">
              Resume
            </a>
          </div>
        </div>
        <div className="about-right">
          <div className="img-container">
            <img className="about-pic" src="https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/IMG_4827_Original.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}