import { createContext, useState } from "react";

export const TodoContext = createContext({
  todo: null,
  setTodo: () => null,
  isComplete: false,
  setIsComplete: () => null,
});

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const [isComplete, setIsComplete] = useState(false);
  const value = { todo, setTodo, isComplete, setIsComplete };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
