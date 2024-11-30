import Groq from "groq-sdk";
import { LLAMA_API_KEY } from "./constants";

const groq = new Groq({ apiKey: LLAMA_API_KEY, dangerouslyAllowBrowser: true });

export async function groqChat(prompt: string) {
  const chatCompletion = await getGroqChatCompletion(prompt);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(prompt: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}


