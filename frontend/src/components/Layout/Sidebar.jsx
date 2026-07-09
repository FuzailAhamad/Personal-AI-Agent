import { Bot, Plus } from "lucide-react";

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

    </div>
  );
}

export default Sidebar;