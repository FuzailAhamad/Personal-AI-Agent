import { SendHorizontal } from "lucide-react";

function MessageInput() {
  return (
    <div className="w-full">
      <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl h-15 flex items-center">

        <div className="flex-1 px-6">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full bg-transparent outline-none text-lg text-zinc-700 placeholder:text-zinc-400"
          />
        </div>

        <button className="mr-3 w-14 h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-2xl text-white transition-all duration-200">
          <SendHorizontal size={22} />
        </button>

      </div>
    </div>
  );
}

export default MessageInput;