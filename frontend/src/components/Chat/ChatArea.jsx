// import { useState, useEffect, useRef } from "react";
// import api from "../../services/api";

// import Welcome from "./Welcome";
// import ChatMessages from "./ChatMessages";
// import MessageInput from "./MessageInput";

// function ChatArea() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const scrollContainerRef = useRef(null);

//   // Auto Scroll
//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollTop =
//         scrollContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (!message.trim()) return;

//     const userMessage = message;

//     // Show user message
//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         role: "user",
//         content: userMessage,
//       },
//     ]);

//     setMessage("");

//     try {
//       const response = await api.post("/chat", {
//         message: userMessage,
//       });

//       // Show AI response
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           role: "assistant",
//           content: response.data.reply,
//         },
//       ]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Welcome Screen
//   if (messages.length === 0) {
//     return (
//       <main className="flex-1 bg-zinc-50">
//         <Welcome
//           message={message}
//           setMessage={setMessage}
//           handleSend={handleSend}
//         />
//       </main>
//     );
//   }

//   // Chat Screen
//   return (
//     <main className="flex-1 bg-zinc-50 flex flex-col overflow-hidden">

//       {/* Scrollable Messages */}
//       <div
//         ref={scrollContainerRef}
//         className="flex-1 overflow-y-auto"
//       >
//         <ChatMessages messages={messages} />
//       </div>

//       {/* Fixed Input */}
//       <div className="border-t bg-zinc-50 px-8 py-5">
//         <div className="max-w-5xl mx-auto">
//           <MessageInput
//             message={message}
//             setMessage={setMessage}
//             handleSend={handleSend}
//           />
//         </div>
//       </div>

//     </main>
//   );
// }

// export default ChatArea;

import { useState, useEffect, useRef } from "react";
import api from "../../services/api";

import Welcome from "./Welcome";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import ChatContainer from "./ChatContainer";

function ChatArea() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

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