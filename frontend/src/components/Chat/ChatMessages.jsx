import Message from "./Message";

function ChatMessages({ messages }) {
  return (
    <div className="space-y-10">

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