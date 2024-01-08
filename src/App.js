import TodoForm from "./components/todo-form/TodoForm";
import "./App.css";
import { TodoProvider } from "./context/todo-context";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );
}

export default App;
