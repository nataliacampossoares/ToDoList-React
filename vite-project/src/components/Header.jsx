function Header() {
    return(
        <div className="bg-gray700 flex flex-col items-center justify-center h-28">
            <img src="/Logo.png"/>
            <div className="flex gap-2">
                <input type="text" placeholder="Adicione uma nova tarefa" className="bg-gray500 border-gray700 w-96 h-10 rounded-md custom-input px-4"/>
                <button className="bg-darkBlue flex items-center gap-1 text-gray100 rounded-md p-2">Criar <img src="/plus.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Header