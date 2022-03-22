import React from "react";
// import { Link } from "react-router-dom";
import { SkillIndex } from "./skills"

export const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div>
        <div className="about-left">
          <h2>Nathan Chau</h2>
          <div>
            Currently building @ <a href="https://gatsby.events/" target="_blank" className="colored-text">Gatsby Labs</a>.
            <br />
            <br />
            Besides software, I'm passionate about rock climbing, traveling, and interior design. Check out some of the projects I've listed above to see how these interests intersect with software!
          </div>
          <div>
            <a target="_blank"href="https://drive.google.com/file/d/10IcJAFDZYPAOsJsrJNTFQx1nwx2s9P9W/view?usp=sharing">
              Resume
            </a>
          </div>
          <h2 id="skill-header">Skills</h2>
          <SkillIndex />
        </div>
        <div className="about-right">
          <div className="img-container">
            <img className="about-pic" src="https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/IMG_4827_Original.jpg"></img>
            <a href="https://joannwphotos.com/#/" target="_blank">Joann Wang ©</a>
          </div>
        </div>
      </div>
    </div>
  )
}
