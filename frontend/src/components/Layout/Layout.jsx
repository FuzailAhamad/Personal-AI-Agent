import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatArea from "../Chat/ChatArea";

function Layout() {

  // Global Chat State
  const [messages, setMessages] = useState([]);

  const [chats, setChats] = useState([]);

  const [currentChatId, setCurrentChatId] = useState(null);
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
        />

      </div>

    </div>
  );
}

export default Layout;