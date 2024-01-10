import { createContext, useState } from "react";

export const TodoContext = createContext({
  todo: null,
  setTodo: () => null,
});

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newItem) => {
    setTodo([...todo, { name: newItem, isComplete: false }]);
  };

  const deleteTodo = (removeIndex) => {
    const filteredList = todo.filter((_, index) => removeIndex !== index);
    setTodo(filteredList);
  };

  const toggleComplete = (toggleIndex) => {
    const newList = todo.map((item, i) =>
      i === toggleIndex
        ? { ...item, isComplete: !item.isComplete }
        : { ...item }
    );
    setTodo(newList);
  };

  const value = {
    todo,
    addTodo,
    deleteTodo,
    toggleComplete,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
