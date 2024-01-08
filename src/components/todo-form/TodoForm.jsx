import "./todoForm.styles.css";

import TaskInfo from "../task-info/TaskInfo";
import TaskInput from "../task-input/TaskInput";

const TodoForm = () => {
  return (
    <div>
      <h2>TO DO</h2>
      <div className="container">
        <TaskInput />

        <TaskInfo />
      </div>
    </div>
  );
};
export default TodoForm;
