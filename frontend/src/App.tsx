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
import { Menu, Send } from 'lucide-react'
import { VNC_SERVER_URL_LIST } from './constants'
import { Option, Task } from './types'
import { Chatbox } from './components/Chatbox'
import { Input } from './components/ui/input'

export default function ChatInterface() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeOption, setActiveOption] = useState<Option>(VNC_SERVER_URL_LIST[0])
  const [iframeUrl, setIframeUrl] = useState<string>(activeOption.url)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const task: Task = {
        command: input,
        status: "Pending",
        bot: activeOption.name
      }
      // Hitting the API endpoint to execute the command

      // Setting the status of the task

      // Adding the task to the tasks list
      setTasks((prevState) => ([
        ...prevState,
        task,
      ]))
      setInput('')
    }
  }

  useEffect(() => {
    setIframeUrl(activeOption.url);
    console.log(activeOption);
  }, [activeOption])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Right side - Dropdown menu + Task Panel*/}
      <div className="w-[250px] bg-gray-800 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Menu className="mr-2 h-4 w-4" />
              <span className='text-lg'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[218px]">
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
                  <AccordionContent className='p-2'>
                    <div className='text-wrap'>
                      {
                        task.command
                      }
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>

      {/* Center - Chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          <iframe
            src={iframeUrl}
            className="w-full h-full p-4"
          />
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex">
            <Input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 mr-2"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Left side - History and Options buttons */}
      <div className="w-[320px] bg-gray-200 p-4 flex flex-col items-center">
        <Chatbox />
      </div>
    </div>
  )
}
