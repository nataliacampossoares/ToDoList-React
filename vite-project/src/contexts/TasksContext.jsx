import { createContext, useState } from 'react';

export const TasksContext = createContext();

export default function TasksProvider({ children }) { 
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
}
