import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div>
        <div className="about-left">
          <h2>Nathan Chau</h2>
          <div>My path to becoming a software engineer can be traced back to Christmas 2003, when I received my first set of legos. I don't remember what I built, but the feeling of putting those scattered little pieces into one complete toy is one that I still feel today, whenever I'm coding. I have a passion for intuitive and accessible software, and a love for seeing projects come to life. 
            <br />
            <br />
            I'm currently working on Schopenahauer with a team of 3 other developers. Schopenhauer is a platform that allows users to create and share music visualizers to pair with their favorite songs, and features a growing library of templates for creators to start with. Besides the MERN stack, Schopenahauer
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