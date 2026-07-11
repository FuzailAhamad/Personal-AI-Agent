import { useState, useEffect, useRef } from "react";
import api from "../../services/api";

import Welcome from "./Welcome";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import ChatContainer from "./ChatContainer";

function ChatArea({
  messages,
  setMessages,
  chats,
  setChats,
  currentChatId,
  setCurrentChatId,
}) {
  // Input State
  const [message, setMessage] = useState("");

  const scrollRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    if (currentChatId === null) {

  const newChat = {
    id: Date.now(),
    title:
      userMessage.length > 30
        ? userMessage.substring(0, 30) + "..."
        : userMessage,
    messages: [],
  };

  setChats((prev) => [...prev, newChat]);

  setCurrentChatId(newChat.id);
}
    // Add User Message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");

    try {
      const response = await api.post("/chat", {
        message: userMessage,
      });

      // Add AI Response
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: response.data.reply,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- Welcome ----------------
  if (messages.length === 0) {
    return (
      <main className="flex-1 flex items-center justify-center bg-zinc-50">
        <ChatContainer>
          <Welcome
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />
        </ChatContainer>
      </main>
    );
  }

  // ---------------- Chat ----------------
  return (
    <main className="flex-1 flex flex-col bg-zinc-50 overflow-hidden">

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto py-10"
      >
        <ChatContainer>
          <ChatMessages messages={messages} />
        </ChatContainer>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-200 bg-zinc-50 py-5">
        <ChatContainer>
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />
        </ChatContainer>
      </div>

    </main>
  );
}

export default ChatArea;