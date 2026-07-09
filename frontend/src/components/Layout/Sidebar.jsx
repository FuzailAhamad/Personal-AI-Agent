import {Bot, Plus, MessageSquare, Settings,} from "lucide-react";
import chatHistory from "../../data/chatHistory";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-900 text-white flex flex-col">

      {/* Sidebar Header */}
      <div className="flex items-center gap-3 p-5 border-b border-zinc-800">
        <Bot size={40} />
        <h1 className="text-xl font-bold">
          Personal Assistant
        </h1>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition rounded-lg py-3 cursor-pointer">

          <Plus size={20} />

          <span>New Chat</span>

        </button>
      </div>

      {/* Chat History */}

      <div className="flex-1 px-4 overflow-y-auto">

        <h2 className="text-sm text-zinc-400 mb-3">
          Recent Chats
        </h2>

        {
          chatHistory.map((chat, index) => (

            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 cursor-pointer mb-2"
            >

              <MessageSquare size={18} />

              <span className="text-sm truncate">
                {chat}
              </span>

            </div>

          ))
        }

      </div>

      {/* Sidebar Footer */}

      <div className="p-4 border-t border-zinc-800">

        <button className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-zinc-800 transition">

          <Settings size={18} />

          <span>Settings</span>

        </button>

      </div>

    </div>
  );
}

export default Sidebar;