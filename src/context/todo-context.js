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

  const [isComplete, setIsComplete] = useState(false);
  const value = { todo, setTodo, isComplete, setIsComplete, addTodo };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
