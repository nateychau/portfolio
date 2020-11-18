import React from "react";
import { Header } from "./header";
import { Splash } from "./splash";
import { ProjectIndex } from "./projects/project-index";
import { Footer } from "./footer";
import { Route } from "react-router-dom";
import { About } from "./about";
import { Resume } from "./resume";

const Main = () => (
  <>
    <Splash /> 
    <ProjectIndex />
    <About />
  </>
)

export const App = () => {
  return (
    <>
    <Header />
    <div className="main">
      <Route exact path="/" component={Main} />
      <Route exact path="/resume" component={Resume} />
      <Footer /> 
    </div>
    </>
  );
}