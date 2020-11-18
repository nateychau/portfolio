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
    <Footer />
  </>
)

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}