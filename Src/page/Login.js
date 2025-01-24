import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here, e.g., call to an API
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Login</h2>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "8px" }}>
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "8px" }}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
