import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ChatState } from "@/types";
import { cn } from "@/lib/utils"
import { groqChat } from "@/Groq";


export const Chatbox = () => {
  const [inputText, setInputText] = useState("");
  const [chat, setChat] = useState<ChatState>({
    chats: []
  });

  // Reference for auto-scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when chats update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleInputSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText.trim()) {
      // Add user message to chat
      setChat((prevState) => ({
        chats: [
          ...prevState.chats,
          {
            id: (chat.chats.length + 1).toString(),
            from: "User",
            message: inputText,
            time: new Date().toLocaleString(),
          }
        ]
      })
      )

      // const userInput = inputText; // Preserve input before clearing
      setInputText("");

      const response = await groqChat(inputText)

      setChat((prevState) => ({
        chats: [
          ...prevState.chats,
          {
            id: (chat.chats.length + 2).toString(),
            from: "Bot",
            message: response,
            time: new Date().toLocaleString(),
          }
        ]
      })
      )
    }
  };





  return (
    <ScrollArea className="h-full p-3 ">
      <div
        // ref={chatContainerRef}
        className="flex flex-col overflow-y-auto"
        style={{ maxHeight: "75vh" }}
      >
        <div className="flex mt-4 ">
          <div className="w-full flex flex-col justify-around gap-4 ">
            <div className="flex-col w-[100%] flex gap-2">
              {chat.chats.map((chatmsg) => (
                <div className="chatMessage" key={chatmsg.id}>
                  <div
                    style={{ maxWidth: "75%" }}
                    className={cn(
                      "py-4",
                      "px-3",
                      "rounded-xl",
                      "inline-block",
                      "w-max-[75%]",
                      "bg-white",
                      chatmsg.from === "Bot" ? "float-left" : "float-right",
                      chatmsg.from === "Bot" ? "" : "bg-red-400 text-white"
                    )}
                  >
                    {chatmsg.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col w-full flex gap-2">
        <div className="w-full">
          <Input
            className="mt-3 w-full mx-0 rounded-xl bg-white text-xl pl-1 pr-1 pt-2 pb-2 h-10"
            placeholder="Go to the fire hydrant"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleInputSubmit}
          />
        </div>
      </div>
    </ScrollArea>
  )
}
