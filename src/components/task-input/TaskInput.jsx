import { useState } from "react";
import "./taskInput.styles.css";
const TaskInput = () => {
  const [task, setTask] = useState("");

  const handleClick = () => {
    console.log(task);
  };
  return (
    <div className="task-input">
      <span className="bullet">◌</span>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <span className="add" onClick={handleClick}>
        ADD
      </span>
    </div>
  );
};
export default TaskInput;
