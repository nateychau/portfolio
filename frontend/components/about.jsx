import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>Nathan Chau</h2>
        <div>I'm a software engineer with a specialization in front-end development and design, and experience with JavaScript, React, Redux, Ruby on Rails, jQuery, HTML5, CSS3, MongoDB, postgreSQL, and Express. My passion for software lies in the design of intuitive, accessible, and aesthetically-pleasing user interfaces. 
          I'm currently working on Schopenahauer, a full stack MERN application, with a team of 3 other developers. Schopenhauer allows users to create and share music visualizers to pair with their favorite songs, and features a growing library of templates for creators to start with. Besides the MERN stack, Schopenahauer
          is built with Redux, Canvas API, and AWS S3. Besides software, I'm passionate about rock climbing, traveling, and interior design. Check out some of the projects I've listed below to see how these interests intersect with software!
        </div>
        <Link to="/resume">
          Resume
        </Link>
      </div>
      <div className="about-right">
        <img className="about-pic" src="https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/IMG_9876.JPG"></img>
      </div>
    </div>
  )
}