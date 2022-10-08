import clipboard from "../assets/clipboard.svg"

export function ListEmpty(){

  return (
    <div className="py-16 px-6 flex flex-col items-center border-t-2 border-[#333333]">

    <div className="text-white mb-4">
      <img src={clipboard}/>
    </div>
    
      <p className="font-bold text-base leading-5 text-[#808080]">
        Você ainda não tem tarefas cadastradas
      </p>

      <p className="text-base leading-5 text-[#808080]">
        Crie tarefas e organize seus itens a fazer
      </p>
 

    </div>
  )

}