import { SendHorizontal } from "lucide-react";

function MessageInput() {
  return (
    <div className="border-t border-zinc-200 p-4">

      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-200">

          <SendHorizontal size={20} />

        </button>

      </div>

    </div>
  );
}

export default MessageInput;