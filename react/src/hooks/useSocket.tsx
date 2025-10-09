import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3000");

function useSocket(): Socket {
  return socket;
}

export default useSocket;
