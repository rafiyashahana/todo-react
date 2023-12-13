import "./styles.css";
const TodoContainer = () => {
  return (
    <div>
      <h2>TO DO</h2>
      <div className="container">
        <div className="task-input">
          <span className="bullet">◌</span>
          <input type="text" placeholder="Add a new task..." />
          <span className="add">ADD</span>
        </div>

        <div className="task-list">
          <div className="task">
            <span>Read for 1 hour</span>
            <span className="close">×</span>
          </div>
          <div className="task">
            <span>Read for 1 hour</span>
            <span className="close">×</span>
          </div>
        </div>

        <div className="task-info">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
