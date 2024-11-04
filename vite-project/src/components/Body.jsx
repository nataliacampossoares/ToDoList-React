function Body() {
  return (
    <div className="bg-gray600 h-screen flex flex-col pt-8">
      <div className="flex justify-around pb-3">
        <div className="flex gap-2">
          <p className="text-lightBlue font-bold">Tarefas criadas</p>
          <span className="rounded-lg text-white bg-gray400 font-bold px-2">
            0
          </span>
        </div>
        <div className="flex gap-2">
          <p className="text-purple font-bold">Concluídas</p>
          <span className="rounded-lg text-white bg-gray400 font-bold px-2">
            0
          </span>
        </div>
      </div>
      <div className="pt-36 border-t-2 border-gray400 flex flex-col items-center">
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
