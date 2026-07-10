import MessageInput from "./MessageInput";

function Welcome({ message, setMessage, handleSend }) {
  return (
    <div className="h-full flex flex-col items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-zinc-800">
          👋 Welcome, Fuzail
        </h1>

        <p className="text-xl text-zinc-500 mt-4">
          How can I help you today?
        </p>

      </div>

      <div className="w-full max-w-5xl px-8 mt-12">

        <MessageInput
          message={message}
          setMessage={setMessage}
          handleSend={handleSend}
        />

      </div>

    </div>
  );
}

export default Welcome;