import MessageInput from "./MessageInput";

function Welcome({ message, setMessage, handleSend }) {
  return (
    <div className="text-center">

      <h1 className="text-5xl font-bold text-zinc-800">
        👋 Welcome, Fuzail
      </h1>

      <p className="text-xl text-zinc-500 mt-4 mb-12">
        How can I help you today?
      </p>

      <MessageInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />

    </div>
  );
}

export default Welcome;