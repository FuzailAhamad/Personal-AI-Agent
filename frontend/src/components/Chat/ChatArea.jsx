import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import MessageInput from "./MessageInput";
import Message from "./Message";

function ChatArea() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    try {
      const response = await api.post("/chat", {
        message: userMessage,
      });

      // Show AI response
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex-1 bg-zinc-50 flex flex-col overflow-hidden">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-8 scroll-smooth">

        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center">

            <h2 className="text-5xl font-bold text-zinc-800">
              👋 Welcome, Fuzail
            </h2>

            <p className="text-xl text-zinc-500 mt-4">
              How can I help you today?
            </p>

          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-6">

            {messages.map((msg, index) => (
              <Message key={index} message={msg} />
            ))}

            {/* Auto Scroll Target */}
            <div ref={messagesEndRef}></div>

          </div>
        )}

      </div>

      {/* Fixed Input */}
      <div className="sticky bottom-0 px-8 py-6 border-t bg-zinc-50">

        <div className="max-w-5xl mx-auto">

          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />

        </div>

      </div>

    </main>
  );
}

export default ChatArea;