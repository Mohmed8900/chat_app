import React from "react";

function Sidebar() {
  const users = ["User 1", "User 2", "User 3", "User 4"];

  return (
    <div
      className="sidebar"
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        width: "200px",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Chat Users</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              marginBottom: "4px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
            onClick={() => alert(`Chat with ${user}`)}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
