import React from "react";
import { ProjectList } from "./projects";

export class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const projList = [];
    for(let key in ProjectList){

      const project = ProjectList[key];
      const projKeys = Object.keys(project.info);

      const projLi = projKeys.map((key, i) => {
        return <li key={i} className={key}>{project.info[key]}</li>
      })

      const projItem = (
        <li className="proj-item" id={project.name} key={project.id}>
          <div className="proj-item-left">
            <img className="proj-splash" src={project.picture}></img>
          </div>
          <div className="proj-item-right">
            <ul className="proj-info">
              {projLi}
            </ul>
          </div>
        </li>
      );
      projList.push(projItem);
    }

    return (
      <div className="proj-index">
        <ul className="proj-list">
          {projList}
        </ul>
      </div>
    )
  }
}