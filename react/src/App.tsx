import { useState, useEffect,  } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import useSocket from "./hooks/useSocket";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import "./App.css";
import { UserNameContext } from "./context/UserNameContext";


function App() {
  const socket = useSocket();
  const [fooEvents, setFooEvents] = useState<string[]>([]);
  
  const [username, setUsername] = useState("");

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
    { path: "/", element: <Welcome setUserName={setUsername}  onClick={enterChat} /> },
    { path: "/chat", element: <Chat className="chat" messages={fooEvents} /> },
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
