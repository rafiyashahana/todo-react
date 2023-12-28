import "./taskList.styles.css";
const TaskList = () => {
  return (
    <div className="task-list">
      <div className="task">
        <span>Read for 1 hour</span>
        <span className="close">×</span>
      </div>
    </div>
  );
};

export default TaskList;
