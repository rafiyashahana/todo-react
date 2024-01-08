import { useContext } from "react";
import "./task.styles.css";
import { TodoContext } from "../../context/todo-context";
const Task = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div className="task-container">
      {todo.map((item, index) => (
        <ul key={index} className="task">
          <li>
            <span>{item.name}</span>
            <span className="close">×</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Task;
