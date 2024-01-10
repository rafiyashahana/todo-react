import { useContext, useState } from "react";
import "./task.styles.css";
import AllTasks from "../all-tasks/AllTasks";
import CompletedTasks from "../completed-tasks/CompletedTasks";
import { TodoContext } from "../../context/todo-context";

const Task = () => {
  const { completedScreen } = useContext(TodoContext);

  return (
    <div className="task-container">
      {completedScreen == false ? <AllTasks /> : <CompletedTasks />}
    </div>
  );
};

export default Task;
