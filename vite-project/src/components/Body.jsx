function Body() {
    return (
      <div className="bg-gray600 h-screen flex flex-col">
        <div className="flex justify-around">
          <p className="text-lightBlue font-bold">Tarefas criadas</p>
          <p className="text-purple font-bold">Concluídas</p>
        </div>
        <div className="border-t-2 border-gray400 flex flex-col items-center">
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
  
  export default Body;
  