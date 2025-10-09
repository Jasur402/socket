import { useState, useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import useSocket from "./hooks/useSocket";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  const socket = useSocket();
  const [fooEvents, setFooEvents] = useState<string[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on("chat", (msg: string) => {
        setFooEvents((prev) => [...prev, msg]);
      });
    }
    return () => {
      if (socket) {
        socket.off("chat");
      }
    };
  }, [socket]);
  const navigate = useNavigate();
  function enterChat() {
    navigate("/chat");
  }

  const routes = [
    { path: "/", element: <Welcome onClick={enterChat} /> },
    { path: "/chat", element: <Chat className="chat" messages={fooEvents} /> },
  ];

  const element = useRoutes(routes);
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
