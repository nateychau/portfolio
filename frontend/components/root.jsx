  
import { App } from "./app";
import React from "react";
import { HashRouter } from "react-router-dom";

export const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};