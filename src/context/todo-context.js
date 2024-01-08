import { createContext, useState } from "react";

export const TodoContext = createContext({
  todo: null,
  setTodo: () => null,
  isComplete: false,
  setIsComplete: () => null,
});

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const addTodo = (newItem) => {
    setTodo([...todo, { name: newItem, isChecked: false }]);
    console.log(todo);
  };

  const deleteTodo = (removeIndex) => {
    const filteredList = todo.filter((_, index) => removeIndex !== index);
    setTodo(filteredList);
  };

  const [isComplete, setIsComplete] = useState(false);

  const value = {
    todo,
    addTodo,
    deleteTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
