import React from "react";
import { Skills } from "./skill_db";

const SkillCategory = ({ category, list }) => {
  let items = [];
  for (let name in list) {
    let icon = list[name];

    let block = (
      <li className="skill-item">
        <i className={icon}></i>
        <h4>{name}</h4>
      </li>
    );

    items.push(block);
  }

  return (
    <div className="skill-section">
      <h2>{category}</h2>
      <ul className="category-list">{items}</ul>
    </div>
  );
};

export const SkillIndex = () => {
  let items = [];
  for (let category in Skills) {
    let list = Skills[category];
    items.push(<SkillCategory category={category} list={list} />);
  }

  return <div className="skill-index">{items}</div>;
};
