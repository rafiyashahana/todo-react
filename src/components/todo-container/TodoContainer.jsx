import "./todoContainer.styles.css";
import TaskList from "../task-list/TaskList";
import TaskInfo from "../task-info/TaskInfo";
import TaskInput from "../task-input/TaskInput";

const TodoContainer = () => {
  return (
    <div>
      <h2>TO DO</h2>
      <div className="container">
        <TaskInput />
        <TaskList />
        <TaskInfo />
      </div>
    </div>
  );
};
export default TodoContainer;
