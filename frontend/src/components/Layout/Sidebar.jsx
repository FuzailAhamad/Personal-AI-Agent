import { Bot } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-900 text-white">

      <div className="flex items-center gap-3 p-5 border-b border-zinc-800">

        <Bot size={28} />

        <h1 className="text-xl font-bold">
          Personal Assistant
        </h1>

      </div>

    </div>
  );
}

export default Sidebar;