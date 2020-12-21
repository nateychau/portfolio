import React from "react";

export class CategoryIndex extends React.Component {
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

  componentDidUpdate(prevProps){
    if(!prevProps.closeAll && this.props.closeAll){
      for(let key in this.state){
        this.setState({ [key] : false});
      }
    }
  }

  componentWillUnmount(){
    this.setState({
      open: false,
      openId: null,
    })
  }

  render() {
    const projList = [];
    for (let key in this.props.list) {
      const project = this.props.list[key];
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
        <li 
          className={
            this.state[project.id] ? "proj-item open" : "proj-item"
          }
          id={project.name} 
          key={project.id}>
          <div
            className="proj-item-top"
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
                {(project.repo && project.repo.length) || (project.paper && project.paper.length) ? 
                  <a
                    onClick={(e) => e.stopPropagation()}
                    className="proj-btn"
                    href={project.repo || project.paper}
                    target="_blank"
                  >
                    {project.repo ? 'Github' : 'Paper'}
                  </a>
                : null} 
                {(project.live && project.live.length) || (project.video && project.video.length) ? 
                  <a
                    onClick={(e) => e.stopPropagation()}
                    className="proj-btn"
                    href={project.live || project.video}
                    target="_blank"
                  >
                    {project.live ? 'Live' : 'Video'}
                  </a>
                : null}
              </div>
            </div>
          </div>
          {/* //{this.state[project.id] ? ( //openId === project.id ? */}
          <div className={this.state[project.id] ? "proj-item-bottom" : "proj-item-bottom hidden"}>
            <div className="proj-item-left">
              <div className="img-container">
                <img className="proj-splash" src={project.picture}></img>
              </div>
            </div>
            <div className="proj-item-right">
              <ul className="proj-info">{projLi}</ul>
            </div>
          </div>
          {/* ) : null} */}
        </li>
      );
      projList.push(projItem);
    }

    return (
      <>
        {/* <div className="proj-header category">{this.props.category}</div> */}
        <ul className="proj-list">{projList}</ul>
      </>
    );
  }
}
