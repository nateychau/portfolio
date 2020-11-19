import React from "react";

export const Splash = (props) => {
  return (
    <div className="splash">
      <div className="splash-left">
        <h2>Hi, I'm &nbsp;<div className="colored-text">Nathan.</div></h2>
        <div>
          I'm a &nbsp;<div className="colored-text">Software Engineer</div>, with experience in &nbsp;<div className="colored-text">UI/UX design</div>. 
        </div>
        <div>Based in the Bay Area.</div> 
      </div>
      <div className="splash-right">
        <div id="splash-img" className="img-container">
          <img src="https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/IMG_9876.JPG"></img>
        </div>
      </div>
    </div>
  )
}