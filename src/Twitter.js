import React from "react";
export default function Twitter() {
  return (
    <>
      {/* Twitter Follow Section  */}
      <p
        style={{
          fontSize: "1.225rem",
          color: " rgba(107, 114, 128)",
          fontWeight: "500",
        }}
      >
        Task 3:Follow this Twitter Page{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <a
            href="https://twitter.com/@RamlogicsT?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-size="large"
            data-show-count="false"
          >
            Follow @RamlogicsT
          </a>
        </div>
        <p
          style={{
            fontSize: "1.225rem",
            color: " rgba(107, 114, 128)",
            fontWeight: "500",
          }}
        >
          Task 4: Tweet in Twitter Account{" "}
        </p>
        <div>
          <a
            class="twitter-share-button"
            data-size="large"
            href="https://twitter.com/intent/tweet?text=you can write tweet here..."
          >
            Tweet
          </a>
        </div>
      </div>
    </>
  );
}
