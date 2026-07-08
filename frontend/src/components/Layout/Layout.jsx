import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatArea from "../Chat/ChatArea";
import MessageInput from "../Chat/MessageInput";

function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        <Header />

        <ChatArea />

        <MessageInput />
      </div>
    </div>
  );
}

export default Layout;