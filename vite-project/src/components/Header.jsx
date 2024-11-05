import { useState, useContext } from "react"; 
import Input from "./Input";
import { TasksContext } from "../contexts/TasksContext";

export default function Header() {
  const [inputTask, setInputTask] = useState("");
  const { addTask } = useContext(TasksContext); 

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleButtonClick = () => {
    addTask(inputTask);
    setInputTask("");
  };

  return (
    <div className="bg-gray700 flex flex-col items-center justify-center h-28">
      <img src="/Logo.png" alt="Logo" />
      <div className="flex gap-2">
        <Input value={inputTask} onChange={handleInputChange} />
        <button
          onClick={handleButtonClick}
          className="bg-darkBlue flex items-center gap-1 text-gray100 rounded-md p-2"
        >
          Criar <img src="/plus.png" alt="Adicionar" />
        </button>
      </div>
    </div>
  );
}
