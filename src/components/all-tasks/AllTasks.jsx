import { useContext } from "react";
import "./allTasks.styles.css";
import { TodoContext } from "../../context/todo-context";
const AllTasks = () => {
  const { todo, deleteTodo, toggleComplete } = useContext(TodoContext);
  return (
    <>
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
    </>
  );
};

export default AllTasks;
