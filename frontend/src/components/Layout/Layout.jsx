import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatArea from "../Chat/ChatArea";

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">

        <Header />

        <ChatArea />

      </div>

    </div>
  );
}

export default Layout;