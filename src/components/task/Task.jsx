import { useContext, useState } from "react";
import "./task.styles.css";
import { TodoContext } from "../../context/todo-context";

const Task = () => {
  const { todo, deleteTodo, toggleComplete } = useContext(TodoContext);

  return (
    <div className="task-container">
      {todo.map((item, index) => (
        <ul key={index} className="task">
          <li className={!item.isComplete ? "unchecked" : "checked"}>
            <span className="task-name" onClick={() => toggleComplete(index)}>
              {item.name}
            </span>
            <span className="close" onClick={() => deleteTodo(index)}>
              ×
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Task;
