import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ChatState, Task } from "@/types";
import { cn } from "@/lib/utils";
import axios from "@/api/axios";

interface ChatboxProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export const Chatbox = ({setTasks, inputText, setInputText}:ChatboxProps) => {
  const [chat, setChat] = useState<ChatState>({ chats: [] });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  async function sendChat(chatmsg: string) {
    const response = await axios.post("/c/task", { command: chatmsg });
    if (response.status === 200) {
      response.data.error = false;
      return response.data;
    } else {
      console.log("Error sending chat message");
      return {message:"Error sending chat message", bot_assigned:"", error:true, status: "failed"};
    }
  }

  const appendTask = (task: Task) => {
    setTasks((prevState) => [...prevState, task]);
  }

  const handleInputSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText.trim()) {
      setChat((prevState) => ({
        chats: [
          ...prevState.chats,
          { id: `${chat.chats.length + 1}`, from: "User", message: inputText, time: new Date().toLocaleString() },
        ],
      }));
      setInputText("");

      const response = await sendChat(inputText);

      if(response.error){
        const reply = response.message;
        setChat((prevState) => ({
          chats: [
            ...prevState.chats,
            { id: `${chat.chats.length + 2}`, from: "Bot", message: reply, time: new Date().toLocaleString() },
          ],
        }));
        const failed_task = {id: response.task_id, status: "failed", command: inputText, bot: response.bot_assigned};
        appendTask(failed_task);
        return;
      }

      const reply = response.message+" and assigned to BOT : "+response.bot_assigned;
      setChat((prevState) => ({
        chats: [
          ...prevState.chats,
          { id: `${chat.chats.length + 2}`, from: "Bot", message: reply, time: new Date().toLocaleString() },
        ],
      }));
      const new_task = {id: response.task_id, status: response.status, command: inputText, bot: response.bot_assigned};
      appendTask(new_task);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-3 bg-gray-200 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Chatbox</h2>
      </div>
      <ScrollArea className="flex-grow p-3">
        <div
          ref={chatContainerRef}
          className="flex flex-col gap-3 overflow-y-auto modern-scrollbar pr-2"
          style={{ maxHeight: "70vh" }}
        >
          {chat.chats.map((chatmsg) => (
            <div
              key={chatmsg.id}
              className={cn(
                "chatMessage flex",
                chatmsg.from === "Bot" ? "justify-start" : "justify-end"
              )}
            >
              <div
                style={{
                  maxWidth: "90%",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
                className={cn(
                  "py-3 px-4 rounded-lg",
                  chatmsg.from === "Bot" ? "bg-blue-100 text-gray-800" : "bg-green-400 text-white"
                )}
              >
                {chatmsg.message}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-3 flex gap-2 items-center">
        <Input
          className="flex-grow rounded-full bg-gray-100 text-gray-800 pl-4 pr-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleInputSubmit}
        />
        <button
          onClick={() => handleInputSubmit({ key: "Enter" } as React.KeyboardEvent<HTMLInputElement>)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};
