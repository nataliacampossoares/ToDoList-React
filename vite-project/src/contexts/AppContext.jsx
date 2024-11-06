import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({children}) {
  const [addtTask, setAddTask] = useState([]);
  const [contadorConcluidas, setContadorConcluidas] = useState(0);
  const [contadorTarefasCriadas, setContadorTarefasCriadas] = useState(0);
  const tasksList = []

  function adicionarTask(task) {
    tasksList.push(task)
    setContadorTarefasCriadas(contadorTarefasCriadas+1)
    console.log(contadorTarefasCriadas)
    console.log(tasksList)
  }

  const contexto = { adicionarTask, contadorTarefasCriadas };
  return (
    <AppContext.Provider value={contexto}>
      {children}
    </AppContext.Provider>
  );
}
