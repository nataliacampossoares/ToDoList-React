import Contador from "./Contador";
import Task from "./Task";

export default function Body() {
  return (
    <div className="bg-gray600 h-screen flex flex-col pt-8">
      <Contador />
      <div className="pt-36 border-t-2 border-gray400 flex flex-col items-center">
        <Task />
        <img src="/Clipboard@2x.png" className="w-12 h-12 mx-auto" />
        <p className="text-gray300 font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray300">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
