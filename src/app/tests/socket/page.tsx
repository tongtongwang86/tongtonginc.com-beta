"use client";
import { useState ,useEffect} from "react";
import useSocket from "../../../hooks/useSocket";


export default function Home() {
  const socket = useSocket();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ username: string; message: string }[]>([]);
  const [joinedRoom, setJoinedRoom] = useState("");

  useEffect(() => {
    if (!socket) return;

    const handleMessage = ({ username, message }: { username: string; message: string }) => {
      setMessages((prev) => [...prev, { username, message }]);
    };

    const handleRoomMessage = (msg: string) => {
      setMessages((prev) => [...prev, { username: "System", message: msg }]);
    };

    socket.on("receive-message", handleMessage);
    socket.on("room-message", handleRoomMessage);

    return () => {
      socket.off("receive-message", handleMessage);
      socket.off("room-message", handleRoomMessage);
    };
  }, [socket]);

  const handleRoom = (type: "create" | "join") => {
    if (!socket || !room.trim() || !username.trim()) return;

    const payload = { username, room };
    socket.emit(type === "create" ? "create-room" : "join-room", payload);
    setJoinedRoom(room);
  };

  const sendMessage = () => {
    if (!socket || !message.trim() || !joinedRoom) return;
    socket.emit("send-message", { room: joinedRoom, message });
    setMessage("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Real-time Chat Rooms</h1>

      {!joinedRoom ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{ marginRight: 10 }}
          />
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Enter room name"
            style={{ marginRight: 10 }}
          />
          <button onClick={() => handleRoom("create")}>Create Room</button>
          <button onClick={() => handleRoom("join")}>Join Room</button>
        </div>
      ) : (
        <>
          <h2>Room: {joinedRoom}</h2>
          <div style={{ border: "1px solid black", padding: 10, marginTop: 20, height: 200, overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <p key={i}>
                <strong>{msg.username}:</strong> {msg.message}
              </p>
            ))}
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            style={{ marginTop: 10, marginRight: 10 }}
          />
          <button onClick={sendMessage}>Send</button>
        </>
      )}
    </div>
  );
}
