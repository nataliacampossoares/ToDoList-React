import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasksList, setTasksList] = useState([]);
  const [contadorConcluidas, setContadorConcluidas] = useState(0);

  function adicionarTask(task) {
    const novaTask = { texto: task, check: false, src: "./checkDefault.png" };
    setTasksList((prev) => [...prev, novaTask]);
  }

  function apagarTask(id) {
    setTasksList((prev) => {
      const tasksListCopia = [...prev];
      tasksListCopia.splice(id, 1);
      return tasksListCopia;
    });
  }

  function alternarCheck(id) {
    setTasksList((prev) =>
      prev.map((task, index) => {
        if (index !== id) {
          //aq ele percorre o map na lista. se o index for diferente de id, ele coloca na copia da lista
          return task;
        }
        const check = !task.check
        const src = check ? "./check.png" : "./checkDefault.png"

        return { ...task, check, src }
      })
    );
  }

  const contexto = {
    adicionarTask,
    tasksList,
    contadorConcluidas,
    setContadorConcluidas,
    apagarTask,
    alternarCheck
  };

  return <AppContext.Provider value={contexto}>{children}</AppContext.Provider>;
}
