import { useContext, useState } from "react"; 
import Input from "./Input";
import { AppContext } from "../contexts/AppContext";

export default function Header() {
  const [inputTask, setInputTask] = useState("");
  const { adicionarTask } = useContext(AppContext)

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputTask.trim() !== "") {
        adicionarTask(inputTask);
        setInputTask("");
    } else {

    }
  };

  return (
    <div className="bg-gray700 flex flex-col items-center justify-center h-28 relative">
      <img src="/Logo.png" alt="Logo" />
      <div className="flex gap-2 absolute bottom-0 translate-y-1/2">
        <Input value={inputTask} onChange={handleInputChange} />
        <button
          onClick={handleButtonClick}
          className="bg-darkBlue flex items-center gap-1 text-gray100 rounded-md p-2 text-sm"
        >
          Criar <img src="/plus.png" alt="Adicionar" />
        </button>
      </div>
    </div>
  );
}
