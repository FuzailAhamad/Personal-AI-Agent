import MessageInput from "./MessageInput";

function ChatArea() {
  return (
    <main className="flex-1 bg-zinc-50 flex flex-col items-center justify-center px-8">

      {/* Welcome */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-zinc-800">
          👋 Welcome, Fuzail
        </h2>

        <p className="text-xl text-zinc-500 mt-4">
          How can I help you today?
        </p>
      </div>

      {/* Message Input */}
      <div className="w-full max-w-5xl mt-16">
        <MessageInput />
      </div>

    </main>
  );
}

export default ChatArea;