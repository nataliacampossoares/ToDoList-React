import { useContext, useState } from "react";
import {AppContext} from "../../contexts/AppContext";

export default function Task(props) {
  
  const { contadorConcluidas, setContadorConcluidas, apagarTask } = useContext(AppContext)

  const [src, setSrc] = useState("./checkDefault.png");
  const [check, setCheck] = useState(false);
  const [colorText, setColorText] = useState("white");

  function handleClickCheck() {
    setSrc((prevSrc) =>
      prevSrc === "./checkDefault.png" ? "./check.png" : "./checkDefault.png"
    );
    setCheck((prev) => !prev);
    setColorText(prev => prev === "white" ? "gray" : "white");
    
    if(src === "./checkDefault.png"){
      setContadorConcluidas(contadorConcluidas + 1)
    } else {
      setContadorConcluidas(contadorConcluidas - 1)
    }
  }

  function handleTrash() {
    apagarTask(props.id)
    if(src === "./check.png"){
      console.log("verificada")
      setContadorConcluidas(contadorConcluidas - 1)
    }
  }

  return (
    <div className="bg-gray500 flex justify-between items-start p-4 border-r-8 rounded-lg w-[80%] max-w-3xl">
      <img src={src} onClick={handleClickCheck} />
      <p
        className="flex-1 mx-3"
        style={{ textDecoration: check ? "line-through" : "none", color: colorText }}
      >
        {props.texto}
      </p>
      <img src="./trash.png" onClick={handleTrash}/>
    </div>
  );
}
