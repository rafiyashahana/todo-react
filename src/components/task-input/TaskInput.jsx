import "./taskInput.styles.css";
const TaskInput = () => {
  return (
    <div className="task-input">
      <span className="bullet">◌</span>
      <input type="text" placeholder="Add a new task..." />
      <span className="add">ADD</span>
    </div>
  );
};
export default TaskInput;
