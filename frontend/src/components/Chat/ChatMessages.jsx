import Message from "./Message";

function ChatMessages({ messages }) {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 space-y-6">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}

export default ChatMessages;