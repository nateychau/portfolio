import React from "react";
import { Header } from "./header";
import { Splash } from "./splash";
import { ProjectIndex } from "./projects/project-index";

export const App = () => {
  return (
    <>
      <Header />
      <Splash /> 
      <ProjectIndex />
    </>
  );
}