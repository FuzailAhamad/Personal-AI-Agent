function Message({ message }) {
  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl px-5 py-3 rounded-2xl shadow-sm whitespace-pre-wrap ${
          message.sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-white border border-zinc-200 text-zinc-800"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export default Message;