import { useState } from "react";

export default function Contador() {
  const [contadorConcluidas, setContadorConcluidas] = useState(0);

  return (
    <div className="flex justify-around pb-3">
      <div className="flex gap-2">
        <p className="text-lightBlue font-bold">Tarefas criadas</p>
        <span className="rounded-lg text-white bg-gray400 font-bold px-2">
          {contadorConcluidas}
        </span>
      </div>
      <div className="flex gap-2">
        <p className="text-purple font-bold">Concluídas</p>
        <span className="rounded-lg text-white bg-gray400 font-bold px-2">
          0
        </span>
      </div>
    </div>
  );
}
