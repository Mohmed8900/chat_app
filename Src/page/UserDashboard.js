import React from "react";
import Sidebar from "../components/Sidebar";

function UserDashboard() {
  // افتراضيا نعرض اسم المستخدم وبيانات عامة
  const userName = "John Doe";
  const userStats = {
    reports: 12,
    activeChats: 5,
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* الشريط الجانبي */}
      <Sidebar />
      
      {/* المحتوى الرئيسي */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#fff",
          borderLeft: "1px solid #ddd",
        }}
      >
        {/* العنوان */}
        <h1 style={{ fontSize: "24px", color: "#333" }}>Welcome, {userName}!</h1>

        {/* إحصائيات المستخدم */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "#f4f4f9",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>
            <h3 style={{ margin: "0", color: "#555" }}>Reports:</h3>
            <p style={{ fontSize: "18px", color: "#000" }}>{userStats.reports}</p>
          </div>
          <div>
            <h3 style={{ margin: "0", color: "#555" }}>Active Chats:</h3>
            <p style={{ fontSize: "18px", color: "#000" }}>{userStats.activeChats}</p>
          </div>
        </div>

        {/* رسالة Placeholder */}
        <p style={{ color: "#888" }}>
          Start by selecting a chat or viewing your reports from the sidebar.
        </p>
      </div>
    </div>
  );
}

export default UserDashboard;
