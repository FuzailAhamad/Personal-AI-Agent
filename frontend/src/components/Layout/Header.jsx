import { Bot } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center gap-3 p-5 border-b border-zinc-200 bg-white">

      <Bot size={24} className="text-blue-600" />

      <h1 className="text-xl font-semibold text-zinc-800">
        Personal Assistant
      </h1>

    </header>
  );
}

export default Header;