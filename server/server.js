const  express = require("express");
const {createServer}  = require("http");
const {Server}  = require("socket.io");

const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const socket = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

socket.on("connection", (connection) => {
  console.log("New client connected", connection.id);

  connection.on("login", (name) => {
    socket.emit("login", name)
  })

  connection.on("chat", (msg) => {
    socket.emit("chat", msg)
  })
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
