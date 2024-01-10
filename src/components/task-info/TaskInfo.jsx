import { useContext, useState } from "react";
import "./taskInfo.styles.css";
import { TodoContext } from "../../context/todo-context";
const TaskInfo = () => {
  const taskInfo = ["All", "Completed"];
  const { setCompletedScreen, showCompleted } = useContext(TodoContext);
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (i) => {
    setActiveTab(i);
    if (i === 1) {
      setCompletedScreen(true);
      showCompleted();
    } else {
      setCompletedScreen(false);
    }
  };
  return (
    <div className="task-info">
      {taskInfo.map((item, index) => (
        <span
          key={index}
          className={index === activeTab ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default TaskInfo;
