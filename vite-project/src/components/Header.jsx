import Input from "./Input";
import { useState } from "react";

export default function Header() {
    const [inputTask, setInputTask] = useState(''); 
    const [armazenarTask, setArmazenarTask] = useState('');
    const tasks = [];

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };
    
    const handleButtonClick = () => {
        setArmazenarTask(inputTask);
        tasks.push(armazenarTask);
        console.log(tasks)
    };

    return (
        <div className="bg-gray700 flex flex-col items-center justify-center h-28">
            <img src="/Logo.png" />
            <div className="flex gap-2">
                <Input value={inputTask} onChange={handleInputChange} />
                <button
                    onClick={handleButtonClick}
                    className="bg-darkBlue flex items-center gap-1 text-gray100 rounded-md p-2"
                >
                    Criar <img src="/plus.png" alt="" />
                </button>
            </div>
        </div>
    );
}
