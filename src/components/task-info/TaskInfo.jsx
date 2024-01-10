import { useContext, useState } from "react";
import "./taskInfo.styles.css";
import { TodoContext } from "../../context/todo-context";
const TaskInfo = () => {
  const taskInfo = ["All", "Active", "Completed"];
  // const { isComplete } = useContext(TodoContext);
  const [active, setActive] = useState(0);
  const handleClick = (i) => {
    setActive(i);
  };
  return (
    <div className="task-info">
      {taskInfo.map((item, index) => (
        <span
          key={index}
          className={index === active ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default TaskInfo;
