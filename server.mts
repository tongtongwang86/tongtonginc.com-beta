import { createServer } from "http";
import { Server } from "socket.io";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

declare global {
  var io: import("socket.io").Server | undefined;
}

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("create-room", ({ username, room }) => {
      socket.join(room);
      socket.data.username = username;
      console.log(`${username} created room: ${room}`);
      io.to(room).emit("room-message", `📢 ${username} created ${room}`);
    });

    socket.on("join-room", ({ username, room }) => {
      socket.join(room);
      socket.data.username = username;
      console.log(`${username} joined room: ${room}`);
      io.to(room).emit("room-message", `📢 ${username} joined the room`);
    });

    socket.on("send-message", ({ room, message }) => {
      const username = socket.data.username || "Anonymous";
      io.to(room).emit("receive-message", { username, message });
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`⚡ Server running on http://localhost:${PORT}`);
  });
});
