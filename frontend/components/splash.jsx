import React from "react";

export const Splash = (props) => {
  return (
    <div className="splash">
      <div className="splash-left">
        <h2>I'm Nathan</h2>
        <div>
          I'm a Software Engineer, with experience in UI/UX design. 
          Based in the Bay Area.  
        </div>
      </div>
      <div className="splash-right">
        <div id="splash-img" className="img-container">
          <img src="https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/IMG_4827_Original.jpg"></img>
        </div>
      </div>
    </div>
  )
}