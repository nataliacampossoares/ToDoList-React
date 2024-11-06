import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({children}) {
  const [tasksList, setTasksList] = useState([]);
  const [contadorConcluidas, setContadorConcluidas] = useState(0)

  function adicionarTask(task) {
    setTasksList(prev => [...prev, task])
  }

  function apagarTask(id) {
    setTasksList(prev => {
        const tasksListCopia = [...prev]
        tasksListCopia.splice(id, 1)
        return tasksListCopia
    })
}

  const contexto = { adicionarTask, tasksList, contadorConcluidas, setContadorConcluidas, apagarTask };

  return (
    <AppContext.Provider value={contexto}>
      {children}
    </AppContext.Provider>
  );
}
