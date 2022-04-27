import { set } from "express/lib/application";
import React from "react";

function Task({ onDeleteTask, text, category }) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" value={text} onClick={onDeleteTask}>X</button>
    </div>
  );
}

export default Task;
