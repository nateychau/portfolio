import React from "react";
import { ProjectList } from "./projects";

export class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      openId: null
    }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(id){
    return () => {
      if (!this.state.open){
        this.setState({open: true, openId: id});
      } else {
        this.setState({open: false, openId: null});
      }
    }
  }

  render(){
    const projList = [];
    for(let key in ProjectList){

      const project = ProjectList[key];
      const projKeys = Object.keys(project.info);

      const projLi = projKeys.map((key, i) => {
        if(key === 'bullets'){
          const bullets = project.info[key];
          return bullets.map((bullet, i) => {
            return <li key={i} className="proj-list-item bullet"><li>{bullet}</li></li>
          })
        }
        return <li key={i} id={key} className="proj-list-item">{project.info[key]}</li>
      })

      const projItem = (
        <li 
          className="proj-item" 
          id={project.name} 
          key={project.id}
        >
          <div 
            className={this.state.open ? "proj-item-top" : 
            "proj-item-top closed"}
            onClick={this.toggleOpen(project.id)}
          >
            <div className="proj-item-third left">
              <div className="proj-title">{project.name}</div>
            </div>
            <div className="proj-item-third center">
              <div>{project.about}</div>
            </div>
            <div className="proj-item-third right">
              <a onClick={(e) => e.stopPropagation()} className="proj-btn" href={project.repo} target="_blank">Github</a>
              <a onClick={(e) => e.stopPropagation()} className="proj-btn" href={project.live} target="_blank">Live</a>
            </div>
          </div>
          {this.state.openId === project.id ? 
          <div className="proj-item-bottom">
            <div className="proj-item-left">
              <div className="img-container">
                <img className="proj-splash" src={project.picture}></img>
              </div>
            </div>
            <div className="proj-item-right">
              <ul className="proj-info">
                {projLi}
              </ul>
            </div>
          </div>
          : null}
        </li>
      );
      projList.push(projItem);
    }

    return (
      <div className="proj-index">
        <div className="proj-header">Projects</div>
        <ul className="proj-list">
          {projList}
        </ul>
      </div>
    )
  }
}