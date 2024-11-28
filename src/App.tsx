'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Send, Clock, Settings } from 'lucide-react'
import { VNC_SERVER_URL } from './constants'
import { Task } from './types'

export default function ChatInterface() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const task: Task = {
        command: input,
        status: "Bot 1",
      }
      setTasks((prevState) => ([
        ...prevState,
        task,
      ]))
      setInput('')
    }
  }
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side - History and Options buttons */}
      <div className="w-16 bg-gray-200 p-4 flex flex-col items-center">
        <Button variant="ghost" className="mb-4">
          <Clock className="h-6 w-6" />
        </Button>
        <Button variant="ghost">
          <Settings className="h-6 w-6" />
        </Button>
      </div>

      {/* Center - Chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-4">
          <iframe
            src={VNC_SERVER_URL}
            className="w-full h-full"
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

      {/* Right side - Dropdown menu + Task Panel*/}
      <div className="w-64 bg-gray-800 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Menu className="mr-2 h-4 w-4" />
              <span>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Bot View</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Bot 1</DropdownMenuItem>
            <DropdownMenuItem>Bot 2</DropdownMenuItem>
            <DropdownMenuItem>Bot 3</DropdownMenuItem>
            <DropdownMenuItem>Bot 4</DropdownMenuItem>
            <DropdownMenuItem>Bot 5</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Command History Panel */}
        <div className="mt-4 text-white">
          <h2 className="text-lg font-bold">Command History</h2>
          <ul className="mt-2 space-y-2">
            {tasks.slice().reverse().map((task, index) => (
              <li key={index} className="flex justify-between p-2 bg-gray-700 rounded">
                <span>{task.command}</span>
                <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-400' : task.status === 'Failed' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}
