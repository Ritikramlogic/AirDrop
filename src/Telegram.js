import React, { useEffect, useState } from "react";
export default function Telegram() {
  const [Members, setMember] = useState({});
  useEffect(() => {
    fetch(
      "https://api.telegram.org/bot2125604414:AAGtS-7FmGHrD3rq0unl7LK-CHbXZfXQJl8/getChatMembersCount?chat_id=@myextrade"
    )
      .then((data) => data.json())
      .then((data) => setMember(data));
  });
  return (
    <>
      <p
        style={{
          fontSize: "1.225rem",
          color: " rgba(107, 114, 128)",
          fontWeight: "500",
        }}
      >
        Task 5: Join The Telegram Group our Current Members are {Members.result}
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <a
          href="https://telegram.me/joinchat/A3hpsDwTGnR6I8sD9C1kcA"
          style={{
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
            backgroundColor: "#f36162",
            color: "#fff",
            padding: "10px 30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Join Us
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            placeholder="Enter ID"
            style={{
              padding: "12px",
              border: "1px solid rgb(0 0 0 / 30%) ",
              borderRadius: "5px",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              outline: "none",
              color: "grey",
            }}
          />
          <div
            style={{
              padding: "10px 20px ",
              backgroundColor: "#000",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Validate
          </div>
        </div>
      </div>
      <div
        style={{
          border: "none",
          borderRadius: "5px",
          textDecoration: "none",
          backgroundColor: "#1877f2",
          //   backgroundColor: "#6aa1e9"
          color: "#fff",
          padding: "10px 30px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "120px",

          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        Clain Reward
      </div>
    </>
  );
}
