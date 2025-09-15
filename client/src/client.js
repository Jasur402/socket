import {io as socketClient} from "socket.io-client";

const socket = socketClient("http://localhost:3000")

socket.on("message", (msg) => {
  console.log(msg)

})



