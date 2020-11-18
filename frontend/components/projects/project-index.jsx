import React from "react";
import { ProjectList } from "./projects";
import { CSSTransitionGroup } from "react-transition-group";

export class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openId: null,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(id) {
    return () => {
      if (this.state[id]) {
        this.setState({ [id]: false });
      } else {
        this.setState({ [id]: true });
      }
    };
  }

  render() {
    const projList = [];
    for (let key in ProjectList) {
      const project = ProjectList[key];
      const projKeys = Object.keys(project.info);

      const projLi = projKeys.map((key, i) => {
        if (key === "bullets") {
          const bullets = project.info[key];
          return bullets.map((bullet, i) => {
            return (
              <div 
                key={i} 
                className={bullets.length > 1 ? 
                  "proj-list-item bullet"
                : "proj-list-item single-line"}
              >
                <li>{bullet}</li>
              </div>
            );
          });
        }
        return (
          <li key={i} id={key} className="proj-list-item">
            {project.info[key]}
          </li>
        );
      });

      const projItem = (
        <li className="proj-item" id={project.name} key={project.id}>
          <div
            className={
              this.state[project.id] ? "proj-item-top active" : "proj-item-top"
            }
            onClick={this.toggleOpen(project.id)}
          >
            <div className="proj-item-third left">
              <div className="proj-title">{project.name}</div>
            </div>
            <div className="proj-item-two-third">
              <div className="center">
                <div>{project.about}</div>
              </div>
              <div className="right">
                {project.repo.length ? 
                  <a
                    onClick={(e) => e.stopPropagation()}
                    className="proj-btn"
                    href={project.repo}
                    target="_blank"
                  >
                    Github
                  </a>
                : null} 
                {project.live.length ? 
                  <a
                    onClick={(e) => e.stopPropagation()}
                    className="proj-btn"
                    href={project.live}
                    target="_blank"
                  >
                    Live
                  </a>
                : null}
              </div>
            </div>
          </div>
          {this.state[project.id] ? ( //openId === project.id ?
          <div className="proj-item-bottom">
            <div className="proj-item-left">
              <div className="img-container">
                <img className="proj-splash" src={project.picture}></img>
              </div>
            </div>
            <div className="proj-item-right">
              <ul className="proj-info">{projLi}</ul>
            </div>
          </div>
            ) : null}
        </li>
      );
      projList.push(projItem);
    }

    return (
      <div id="projects" className="proj-index">
        <div className="proj-header">Projects</div>
        <ul className="proj-list">{projList}</ul>
      </div>
    );
  }
}
