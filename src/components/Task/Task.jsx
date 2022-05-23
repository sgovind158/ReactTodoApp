import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({id,deleteTodo,value}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      {value}
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick = {deleteTodo(value,id)}>Delete</button>
    </li>
  );
};

export default Task;
