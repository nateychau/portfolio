import React from "react";
import { CategoryIndex } from "./category";
import { ProjectList } from "./software";
import { DataList } from "./data";
import { DesignList } from "./design";
import { WorkList } from "./work";

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
    }
  }

  componentWillUnmount() {
    this.setState({
      open: false,
      openId: null,
    });
  }

  render() {
    const categoryList = [];
    const categories = {
      Code: ProjectList,
      Work: WorkList,
      Design: DesignList,
      Data: DataList,
    };
    let keys = Object.keys(categories);
    for (let i = 0; i < keys.length; i++) {
      let category = keys[i];
      const list = categories[category];

      const categoryItem = (
        <li
          className={
            this.state[i]
              ? "proj-item category-open"
              : "proj-item"
          }
          id={category}
          key={i}
        >
          <div
            className="category-item-top"
            onClick={this.toggleOpen(i)}
          >
            <div className="category-item-third left">
              <div className="category-title">{category}</div>
            </div>
            <div className="arrow">
              <i
                className={
                  this.state[i]
                    ? "fas fa-caret-up"
                    : "fas fa-caret-down"
                }
              ></i>
            </div>
          </div>
          <div
            className={
              this.state[i]
                ? "category-item-bottom"
                : "category-item-bottom hidden"
            }
          >
            <CategoryIndex
              category={category}
              list={list}
              closeAll={!this.state[i]}
            />
          </div>
        </li>
      );
      categoryList.push(categoryItem);
    }

    return (
      <div id="projects" className="proj-index">
        <div className="proj-header">Projects</div>
        <ul className="proj-list">{categoryList}</ul>
        {/* <CategoryIndex category="Software" list={ProjectList}/>
        <CategoryIndex category="Work" list={WorkList}/>
        <CategoryIndex category="Design" list={DesignList}/>
        <CategoryIndex category="Data" list={DataList}/> */}
      </div>
    );
  }
}
