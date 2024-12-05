export interface Task {
  command: string;
  status: string;
  bot: string;
  id: string;
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

export interface Option {
  name: string;
  url: string;
  status: string;
}


interface Coordinate {
  x: number;
  y: number;
  z: number;
}

export interface DataStructure {
  shelf: Coordinate[];
  pallet_jack: Coordinate[];
  my_ramp: Coordinate[];
  my_bump: Coordinate[];
  stairs: Coordinate[];
  tote: Coordinate[];
  pallet: Coordinate[];
  chair_x3: Coordinate[];
}