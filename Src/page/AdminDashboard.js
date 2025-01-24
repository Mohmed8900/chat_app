import React from "react";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          backgroundColor: "#f4f4f9",
        }}
      >
        <h1 style={{ marginBottom: "16px" }}>Admin Dashboard</h1>
        <div>
          {/* Example content */}
          <p>Welcome to the Admin Dashboard. Here you can manage users, view statistics, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
