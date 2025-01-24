import React, { useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="chat-window" style={{ border: "1px solid #ccc", padding: "16px", width: "300px" }}>
      <div
        className="messages"
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid #ddd",
          marginBottom: "8px",
          padding: "8px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
        style={{ width: "calc(100% - 50px)", marginRight: "8px" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatWindow;
