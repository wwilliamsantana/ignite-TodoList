import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

export function Post(){
  return (
      <div className="flex bg-[#262626] p-4 gap-3 items-start rounded-lg mb-3">

      <Checkbox.Root className="w-4 h-4 mt-1 rounded-full bg-slate-500">
        <Checkbox.Indicator >
          <Check className="w-4 h-4  rounded-full text-white bg-violet-500"/>
      </Checkbox.Indicator>
      </Checkbox.Root>

      <div className="text-white flex-1 text-sm">
        <p >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Duis vel sed fames integer</p>
      </div>  
      

      <div className="mt-1 text-[#808080] hover:bg-[#333333] hover:text-red-600 hover:rounded">
        <Trash/>
      </div>
      
    
    </div>
  )
}