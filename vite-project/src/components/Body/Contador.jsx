import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function Contador() {

  const { tasksList, contadorConcluidas } = useContext(AppContext)

  return (
    <div className="flex justify-around pb-3">
      <div className="flex gap-2">
        <p className="text-lightBlue font-bold">Tarefas criadas</p>
        <span className="rounded-lg text-white bg-gray400 font-bold px-2">
          {tasksList.length}
        </span>
      </div>
      <div className="flex gap-2">
        <p className="text-purple font-bold">Concluídas</p>
        <span className="rounded-lg text-white bg-gray400 font-bold px-2">
        {contadorConcluidas} de {tasksList.length}
        </span>
      </div>
    </div>
  );
}
