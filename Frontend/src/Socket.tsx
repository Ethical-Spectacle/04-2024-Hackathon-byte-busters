import { useEffect, useState } from "react";

export default function WebSocketCall({ socket }:any) {
  const [message, setMessage] = useState<String>("");
  const [messages, setMessages] = useState<any>([]);

  const handleText = (e:any) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data:any) => {
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <div>
      <h2>WebSocket Communication</h2>
      <input type="text" value={`${message}`} onChange={handleText} />
      <button onClick={handleSubmit}>submit</button>
      <ul>
        {messages.map((message:any, ind:any) => {
          return <li key={ind}>{message}</li>;
        })}
      </ul>
    </div>
  );
}
