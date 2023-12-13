import "./styles.css";
const TodoContainer = () => {
  return (
    <div>
      <h2>TO DO</h2>
      <div className="container">
        <input type="text" placeholder="Add new task" />
      </div>
    </div>
  );
};
export default TodoContainer;
