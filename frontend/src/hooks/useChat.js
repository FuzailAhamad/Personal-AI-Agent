import { useState } from "react";

function useChat() {

    const [chats, setChats] = useState([]);

    const [currentChatId, setCurrentChatId] = useState(null);
    const createChat = (firstMessage) => {

        const newChat = {

            id: Date.now(),

            title:
                firstMessage.length > 30
                    ? firstMessage.substring(0, 30) + "..."
                    : firstMessage,

            createdAt: Date.now(),

            messages: [],

        };

        setChats((prev) => [...prev, newChat]);

        setCurrentChatId(newChat.id);

        return newChat;
    };

    return {
        chats,
        setChats,

        currentChatId,
        setCurrentChatId,
        createChat,
    };

}

export default useChat;