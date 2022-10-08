import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import { PostProps } from '../App';

interface Props {
  item: PostProps
  onDeletePost: (id: string) => void
  onCompletePost: (state: Checkbox.CheckedState, id: string) => void
}



export function Post({onDeletePost, onCompletePost,  ...props}: Props){
  
   const [checked, setChecked] = useState(false)

   function handleCheckComment(event: Checkbox.CheckedState){
      onCompletePost(event, props.item.id)
      setChecked(!checked)
   }

   function handleDeleteComment(){
    onDeletePost(props.item.id)
   }

  return (
      <div className="flex bg-[#262626] p-4 gap-3 items-start rounded-lg mb-3">

      <Checkbox.Root  onCheckedChange={handleCheckComment} className="w-4 h-4  rounded-full bg-slate-500">
        <Checkbox.Indicator >
          <Check className="w-4 h-4  rounded-full text-white bg-violet-500"/>
      </Checkbox.Indicator>
      </Checkbox.Root>

      <div className="text-white flex-1 text-sm">
        <p className= {checked ? "line-through text-[#808080]" : ""}>
          {props.item.title}</p>
      </div>  
      

      <div onClick={handleDeleteComment} className=" text-[#808080] hover:bg-[#333333] hover:text-red-600 hover:rounded">
        <Trash/>
      </div>
      
    
    </div>
  )
}