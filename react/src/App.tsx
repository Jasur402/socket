import { useState, useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import useSocket from "./hooks/useSocket";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import "./App.css";
import { UserNameContext } from "./context/UserNameContext";
import type { MessageData } from "./types/message";

function App() {
  const socket = useSocket();
  const [messages, setMessages] = useState<MessageData[]>([]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (socket) {
      socket.on(
        "chat",
        (data: { sender: string; text: string; timestamp: string }) => {
          const newMessage: MessageData = {
            id: Date.now().toString(),
            text: data.text,
            sender: data.sender,
            timestamp: new Date(data.timestamp),
            isOwn: data.sender === username,
          };
          setMessages((prev) => [...prev, newMessage]);
        }
      );
    }
    return () => {
      if (socket) {
        socket.off("chat");
      }
    };
  }, [socket, username]);

  const navigate = useNavigate();

  function enterChat() {
    navigate("/chat");
  }

  const routes = [
    {
      path: "/",
      element: <Welcome setUserName={setUsername} onClick={enterChat} />,
    },
    { path: "/chat", element: <Chat className="chat" messages={messages} /> },
  ];
  const element = useRoutes(routes);

  return (
    <div>
      <UserNameContext.Provider value={username}>
        {element}
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
