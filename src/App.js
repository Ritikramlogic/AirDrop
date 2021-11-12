import { useState } from "react";
import "./App.css";
import FaceBook from "./Facebook";
import Twitter from "./Twitter";
import Telegram from "./Telegram";

function App() {
  const [TwTweet, setTwTweet] = useState(false);
  const [TwFollow, setTwFollow] = useState(false);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg,#9977fb,#dd3231)",
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          borderRadius: "0.775rem",
          border: "none",
          padding: "1.8rem",
          background: "white",
          boxShadow: "0 4px 16px 0 rgb(0 0 0 / 60%)",
        }}
      >
        <h2 style={{ fontSize: "2.875rem" }}>
          Participate in AirDrop Features
        </h2>

        <div style={{ textAlign: "center" }}>
          <FaceBook />
        </div>
        <Twitter />

        <Telegram />
      </div>
    </div>
  );
}

export default App;

const facebookShare = () => {
  console.log("facebookShare");
};

// API iyHBX87SqnTXNZjMOVQICuNrC
//API SS vmV9hoqi6J9EYPCCAX6KRFDRl2VvLifL611Y7Nhv5nRQrEncb1
//Bear Token  AAAAAAAAAAAAAAAAAAAAAN7WVgEAAAAAc8Y2sOgdQKi59Dmi14%2BccROQC%2Bk%3Du7k2Iu1fjEyGP3NzgPJ1yGZ8D7GyezmyPrZ05MTeBUxVlmNOH3

// Telegram API :
// https://api.telegram.org/bot2125604414:AAGtS-7FmGHrD3rq0unl7LK-CHbXZfXQJl8/getChatMembersCount?chat_id=@myextrade
// https://api.telegram.org/bot2125604414:AAGtS-7FmGHrD3rq0unl7LK-CHbXZfXQJl8/getMe?user=@ramlogicsBot

// https://api.telegram.org/bot2125604414:AAGtS-7FmGHrD3rq0unl7LK-CHbXZfXQJl8promoteChatMember?chat_id=@myextrade&user_id=@ramlogics

// correct
// https://api.telegram.org/bot2125604414:AAGtS-7FmGHrD3rq0unl7LK-CHbXZfXQJl8/getChatMember?chat_id=@myextrade&user_id=1169885559
