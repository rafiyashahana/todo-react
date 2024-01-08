import { useContext, useState } from "react";
import "./taskInput.styles.css";
import { TodoContext } from "../../context/todo-context";
import Task from "../task/Task";
const TaskInput = () => {
  const { setTodo, todo, addTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (!input) return;
    addTodo(input);
    setInput("");
  };
  return (
    <>
      <div className="task-input">
        <span className="bullet">◌</span>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="add" onClick={handleClick}>
          ADD
        </span>
      </div>
      {todo && <Task />}
    </>
  );
};
export default TaskInput;
