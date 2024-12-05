import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItemWithActive,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from 'lucide-react'
import { VNC_SERVER_URL_LIST } from './constants'
import { DataStructure, Option, Task } from './types'
import { Chatbox } from './components/Chatbox'
import left_caret from './assets/prev_icon.svg'
import right_caret from './assets/next_icon.svg'
import Commands from './components/Commands'
import axios from './api/axios'

export default function ChatInterface() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [options, setOptions] = useState<DataStructure>(null)
  const [activeOption, setActiveOption] = useState<Option>(VNC_SERVER_URL_LIST[0])
  const [iframeUrl, setIframeUrl] = useState<string>(activeOption.url)
  const [cmdopen, setCmdopen] = useState(false)
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setIframeUrl(activeOption.url);
  }, [activeOption])

  async function fetchTasks(){
    const response = await axios.get('/tasks');
    if(response.status === 200){
      setOptions(response.data);
    } else {
      console.log('Error fetching tasks');
    }
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Right side - Dropdown menu + Task Panel*/}
      <div className={`w-[350px] bg-[rgba(31,41,55,0.97)] p-4 absolute left-0 top-0 bottom-0 shadow-2xl ${!cmdopen?"translate-x-[-350px]":""} duration-200`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Menu className="mr-2 h-4 w-4" />
              <span className='text-lg'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[318px]">
            <DropdownMenuLabel>Views</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {VNC_SERVER_URL_LIST.map((bot, index) => (
              <DropdownMenuItemWithActive
                key={index}
                onClick={() => setActiveOption(bot)}
                className={`${bot === activeOption
                  ? 'bg-blue-600 text-white font-bold hover:bg-blue-400 hover:text-white'
                  : 'focus:bg-accent focus:text-accent-foreground'
                  } px-4 py-2 cursor-pointer`}
              >
                {bot.name}
              </DropdownMenuItemWithActive>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Command History Panel */}
        <div className="mt-4 text-white">
          <h2 className="text-lg font-semibold pl-2 pb-2 border-b-[1px] border-b-white">Command History</h2>
          <Accordion type='multiple' className="mt-2 space-y-2 relative">
            {tasks.slice().reverse().map((task, index) => {
              return (
                <AccordionItem value={task.command} key={index} className={`p-2 bg-gray-700 rounded text-nowrap cursor-default`}>
                  <div className='flex justify-between items-center gap-2'>
                    <AccordionTrigger className='h-6'>
                    </AccordionTrigger>
                    <span className='overflow-hidden text-ellipsis text-nowrap w-full'>
                      {task.command}
                    </span>
                    <div className='flex gap-2 justify-center items-center'>
                      <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-400' : task.status === 'Failed' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                  <AccordionContent className='p-2 h-max'>
                    <div className='text-wrap'>
                      {
                        task.command
                      }
                    </div>
                    <div className='w-full flex justify-start items-center py-2'>
                      <span className='text-nowrap px-3 py-[1px] bg-orange-500 rounded-full'>BOT-{task.bot}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
        <div onClick={()=>{
            setCmdopen(!cmdopen)
          }} className='absolute top-0 right-0 translate-x-[100%] bg-[#617796] hover:bg-[#2f3b4b] duration-150 cursor-pointer text-white p-2 rounded-r-md shadow-2xl'>
          <button className='py-1 w-[5px] h-[18px] flex justify-center items-center rounded-r-md'>
            <img src={right_caret} alt='right_caret' className={`h-6 w-6 ${cmdopen?"hidden":"flex"}`} />
            <img src={left_caret} alt='left_caret' className={`h-6 w-6 ${!cmdopen?"hidden":"flex"}`} />
          </button>
        </div>
      </div>

      {/* Center - Chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          <iframe
            src={iframeUrl}
            className="w-full h-full p-2"
          />
        </div>
      </div>

      {/* Left side - History and Options buttons */}
      <div className="w-[320px] bg-gray-200 p-4 flex flex-col items-center gap-2">
        <div className='flex flex-col h-[40%] w-full bg-gray-50 border border-gray-300 rounded-lg shadow-md'>
          <Commands setInputText={setInputText} data={options}/>
        </div>
        <Chatbox inputText={inputText} setInputText={setInputText} setTasks={setTasks}/>
      </div>
    </div>
  )
}
