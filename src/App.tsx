import "./styles/main.css"
import { PlusCircle } from "phosphor-react"
import { v4 as uuidV4 } from "uuid"

import logoImg from "./assets/logo.svg"
import { ListEmpty } from "./components/ListEmpty"
import { Post } from "./components/Posts"
import { useState } from "react"
import { CheckedState } from "@radix-ui/react-checkbox"

export interface PostProps {
  id: string
  title: string
  isComplete: boolean | CheckedState
}




export function App() {
  const [listPost, setListPost] = useState<PostProps[]>([])
  const [newPost, setNewPost] = useState("")
  const [tasksCountDone, setTasksCountDone] = useState(0)


  function handleDeletePost(id: string) {
    let newList = listPost.filter(item => item.id !== id)

    setListPost(newList)
    if (tasksCountDone > 0) {
      setTasksCountDone(tasksCountDone - 1)
    }

  }

  function handleCompletePost(state: CheckedState, id: string) {
    let newList = listPost

    newList.map(post => {
      if (post.id == id) {
        post.isComplete = state
      }
    })

    setListPost(newList)
    setTasksCountDone(() => listPost.filter(item => item.isComplete).length)
  }

  function handleNewPost() {
    const newTodo = {
      id: uuidV4(),
      title: newPost,
      isComplete: false
    }

    setListPost(prev => [newTodo, ...prev])
    setNewPost("")
  }




  return (
    <div className="bg-[#0D0D0D] h-[12.5rem]">

      <div className="max-w-3xl m-auto">

        <div className="flex items-center justify-center pt-[4.5rem]">
          <img className="w-32 h-12" src={logoImg} />
        </div>

        <div className="mt-[3.31rem] flex items-center">
          <input
            type="text"
            value={newPost}
            placeholder="Adicione uma nova tarefa"
            onChange={e => setNewPost(e.target.value)}
            className="flex-1 text-[#f2f2f2] rounded-lg bg-[#262626] h-[3.375rem] p-4 placeholder:text-[#808080] border-[#0D0D0D] border-2 outline-none focus:outline-2 focus:outline-[#5E60CE]"
          />

          <button
            onClick={handleNewPost}
            className="text-sm font-bold flex items-center p-4 bg-[#1E6F9F] rounded-lg ml-2 text-white gap-2 hover:bg-[#4EA8DE]"
          >
            Criar
            <PlusCircle size={16} />
          </button>

        </div>

        <div className="flex justify-between items-center mt-16 ">

          <div className="flex items-center gap-2">
            <p className="font-bold text-sm text-[#4EA8DE] leading-4" >Tarefas criadas</p>
            <span className="py-0.5 px-2 rounded-full bg-[#333333] text-xs font-bold leading-4 text-white">
              {listPost.length}
            </span>
          </div>

          <div className="flex items-center gap-2" >

            <p className="font-bold text-sm text-[#8284fA] leading-4">Concluídas</p>

            <span className="py-0.5 px-2 rounded-full bg-[#333333] text-xs font-bold leading-4 text-white">
              {`${tasksCountDone} de ${listPost.length}`}
            </span>
          </div>

        </div>



        <main className="mt-6">




          {
            listPost.length === 0 ? <ListEmpty /> : listPost.map(item => <Post key={item.id} item={item} onDeletePost={handleDeletePost} onCompletePost={handleCompletePost} />)
          }


        </main>

      </div>
    </div>
  )
}
