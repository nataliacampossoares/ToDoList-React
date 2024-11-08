import { useContext } from "react";
import Contador from "./Contador";
import Task from "./Task";
import { AppContext } from "../../contexts/AppContext";

export default function Body() {
  const { tasksList } = useContext(AppContext);

  return (
    <div className="bg-gray600 flex flex-1 flex-col pt-8">
      <Contador />

      <div className="pt-10 border-t-2 border-gray400 flex flex-col items-center gap-3 pb-4">
        
        {tasksList.length == 0 ? (
          <div>
            <img src="/Clipboard@2x.png" className="w-12 h-12 mx-auto" />
            <p className="text-gray300 font-bold">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="text-gray300">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <>
            {tasksList.map((task, index) => (
              <Task task={task} id={index} />
            ))}
          </>
        )}

      </div>
    </div>
  );
}
