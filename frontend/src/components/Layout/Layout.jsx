import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatArea from "../Chat/ChatArea";
import useChat from "../../hooks/useChat";

function Layout() {

  // Temporary (will migrate later)
  const [messages, setMessages] = useState([]);

  // Chat Hook
  const {
    chats,
    setChats,
    currentChatId,
    setCurrentChatId,
    createChat,
  } = useChat();

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar
        setMessages={setMessages}
      />

      <div className="flex flex-col flex-1 overflow-hidden">

        <Header />

        <ChatArea
          messages={messages}
          setMessages={setMessages}
          chats={chats}
          setChats={setChats}
          currentChatId={currentChatId}
          setCurrentChatId={setCurrentChatId}
          createChat={createChat}
        />

      </div>

    </div>
  );
}

export default Layout;