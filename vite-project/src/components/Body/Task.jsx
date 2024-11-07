import { useContext } from "react";
import {AppContext} from "../../contexts/AppContext";

export default function Task(props) {
  
  const { contadorConcluidas, setContadorConcluidas, apagarTask, alternarCheck, tasksList } = useContext(AppContext)

  const taskAtual = tasksList[props.id]

  function handleClickCheck() {
    alternarCheck(props.id);

    if (taskAtual.check == true) {
      setContadorConcluidas(contadorConcluidas - 1);
    } else {
      setContadorConcluidas(contadorConcluidas + 1);
    }
}

function handleTrash() {
    apagarTask(props.id);
    if (taskAtual.check == true) {
        setContadorConcluidas(contadorConcluidas - 1);
    }
}

return (
  <div className="bg-gray500 flex justify-between items-start p-4 border-r-8 rounded-lg w-[80%] max-w-3xl">
    <img src={props.task.src} onClick={handleClickCheck} />
    <p
      className="flex-1 mx-3"
      style={{
        textDecoration: props.task.check ? "line-through" : "none",
        color: props.task.check ? "gray" : "white"
      }}
    >
      {props.task.texto}
    </p>
    <img src="./trash.png" onClick={handleTrash} />
  </div>
);
}
