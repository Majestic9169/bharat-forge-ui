export interface Task {
  command: string;
  status: string;
  bot: string;
}

export interface Option {
  name: string;
  status: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  from: "Bot" | "User";
  message: string;
  time: string;
}

export interface ChatState {
  chats: ChatMessage[];
}

export const initialChatState: ChatState = {
  chats: [
    {
      id: "1",
      from: "Bot",
      message: "Hello! How can I assist you?",
      time: new Date().toLocaleString(),
    },
  ],
};

