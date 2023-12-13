import "./styles.css";
const TodoContainer = () => {
  return (
    <div>
      <h2>TO DO</h2>
      <div className="container">
        <input type="text" placeholder="◌  Add a new task..." />
        <div className="tasks">
          <span className="task-list">Read for 1 hour</span>
          <span className="close">×</span>
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
