// import { SendHorizontal } from "lucide-react";

// function MessageInput({

//   message,
//   setMessage,
//   handleSend,

// }) {

//   const handleKeyDown = (e) => {

//     if (e.key === "Enter") {

//       handleSend();

//     }

//   };

//   return (

//     <div className="w-full">

//       <div className="bg-white border border-zinc-200 rounded-full shadow-md h-16 flex items-center transition-all focus-within:ring-2 focus-within:ring-blue-500">

//         <div className="flex-1 px-6">

//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Ask me anything..."
//             className="w-full bg-transparent outline-none text-lg text-zinc-700 placeholder:text-zinc-400"
//           />

//         </div>

//         <button
//           onClick={handleSend}
//           className="mr-2 w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
//         >

//           <SendHorizontal size={22} />

//         </button>

//       </div>

//     </div>

//   );
// }

// export default MessageInput;

import { SendHorizontal } from "lucide-react";

function MessageInput({
  message,
  setMessage,
  handleSend,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full">

      <div className="flex items-center bg-white border border-zinc-200 rounded-[28px] shadow-lg px-4 py-3 transition-all focus-within:border-blue-500">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          className="flex-1 bg-transparent outline-none text-[17px] text-zinc-800 placeholder:text-zinc-400 px-2"
        />

        <button
          onClick={handleSend}
          className="ml-3 h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center text-white"
        >
          <SendHorizontal size={20} />
        </button>

      </div>

    </div>
  );
}

export default MessageInput;