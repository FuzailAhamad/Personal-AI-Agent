function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`w-full ${isUser ? "flex justify-end" : "flex justify-start"}`}>

      {isUser ? (

        <div className="max-w-[70%] rounded-[24px] rounded-br-md bg-zinc-700 text-white px-5 py-3 shadow-sm text-[15px] leading-7 break-words">
          {message.content}
        </div>

      ) : (

        <div className="max-w-3xl text-zinc-800 text-[16px] leading-8 whitespace-pre-wrap">
          {message.content}
        </div>

      )}

    </div>
  );
}

export default Message;

// function Message({ message }) {
//   const isUser = message.role === "user";

//   return (
//     <div className="w-full flex">
//       {isUser ? (
//         <div className="ml-auto max-w-[70%] rounded-3xl rounded-br-lg bg-blue-600 px-5 py-3 text-white break-words shadow">
//           {message.content}
//         </div>
//       ) : (
//         <div className="max-w-3xl text-[17px] leading-8 text-zinc-800">
//           {message.content}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Message;